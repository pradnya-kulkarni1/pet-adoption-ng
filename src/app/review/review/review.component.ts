import { Component, OnInit } from '@angular/core';
import { Adoption } from '../../model/adoption';
import { AdoptionService } from '../../services/adoption.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../services/system.service';
import { AdoptionRequestService } from '../../services/adoption-request.service';
import { AdoptionRequest } from '../../model/adoptionRequest';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit{
title: string = "Review";
adoptionRequests: AdoptionRequest[] = [];
adoptionRequest: AdoptionRequest = new AdoptionRequest();
message?: string = undefined;
rejectionReason: string = "";
id: number = 0;

constructor(private adoptRequestSvc: AdoptionRequestService,
  private router: Router,
  private route: ActivatedRoute,
  private sysSvc: SystemService
){}

ngOnInit(): void{
  
  this.sysSvc.checkLogin();

  this.adoptRequestSvc.getAllAdoptionRequests().subscribe({
    next:(parms)=>{
      this.adoptionRequests = parms;
    },
    error:(err)=>{
      console.log('Error getting Adoption Requests: ', err);
    },
    complete:()=>{},
  });
  
}

approveOrReject(id:number, rejectionReason:string): void{
  console.log("rejectionReason = ",rejectionReason);
  if(!rejectionReason){
    this.approve(id);
  }
  else{
    this.reject(id, rejectionReason);
  }
}

approve(id: number): void {
  console.log('id= ',id);
  this.rejectionReason = "";
this.adoptRequestSvc.approveAdoptionRequest(id).subscribe({
 next: (resp) => {
   this.adoptionRequest = resp;
   if(this.adoptionRequest.status=="APPROVED"){
   this.rejectionReason ="";}
   console.log('approved adoption', this.adoptionRequest.status);
   this.adoptRequestSvc.getAllAdoptionRequests().subscribe({
    next:(parms)=>{
      this.adoptionRequests = parms;
    },
    error:(err)=>{
      console.log('Error getting Adoption Requests: ', err);
    },
    complete:()=>{},
  });
  
   this.router.navigateByUrl('/adoption/adopt');
 },
 error: (err) => {
   console.log("Error creating Adoption: ", err);
   this.message = "Error creating Adoption.";
 },
 complete: () => {}
});

}
reject(id: number, rejectionReason: string): void{
this.adoptRequestSvc.rejectAdoptionRequest(id, rejectionReason).subscribe({
 next: (resp) => {
   this.adoptionRequest = resp;
   this.adoptRequestSvc.getAllAdoptionRequests().subscribe({
    next:(parms)=>{
      this.adoptionRequests = parms;
    },
    error:(err)=>{
      console.log('Error getting Adoption Requests: ', err);
    },
    complete:()=>{},
  });
  
   this.router.navigateByUrl('/review/review');
 },
 error: (err) => {
   console.log("Error creating adoption: ", err);
   this.message = "Error creating adoption.";
 },
 complete: () => {}
});


}
}
