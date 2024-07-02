import { Component, OnInit } from '@angular/core';
import { Adoption } from '../../model/adoption';
import { AdoptionService } from '../../services/adoption.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit{
title: string = "Review";
adoptions: Adoption[] = [];
adoption: Adoption = new Adoption();
message?: string = undefined;
rejectionReason: string = "";
id: number = 0;

constructor(private adoptSvc: AdoptionService,
  private router: Router,
  private route: ActivatedRoute
){}

ngOnInit(): void{

  this.adoptSvc.getAllAdoptions().subscribe({
    next:(parms)=>{
      this.adoptions = parms;
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
this.adoptSvc.approveAdoption(id).subscribe({
 next: (resp) => {
   this.adoption = resp;
   if(this.adoption.status=="APPROVED"){
   this.rejectionReason ="";}
   console.log('approved adoption', this.adoption.status);
   this.adoptSvc.getAllAdoptions().subscribe({
    next:(parms)=>{
      this.adoptions = parms;
    },
    error:(err)=>{
      console.log('Error getting Adoption Requests: ', err);
    },
    complete:()=>{},
  });
  
   this.router.navigateByUrl('/review/review');
 },
 error: (err) => {
   console.log("Error creating Adoption: ", err);
   this.message = "Error creating Adoption.";
 },
 complete: () => {}
});

}
reject(id: number, rejectionReason: string): void{
this.adoptSvc.rejectAdoption(id, rejectionReason).subscribe({
 next: (resp) => {
   this.adoption = resp;
   this.adoptSvc.getAllAdoptions().subscribe({
    next:(parms)=>{
      this.adoptions = parms;
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
