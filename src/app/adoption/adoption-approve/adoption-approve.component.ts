import { Component, OnInit } from '@angular/core';
import { Adoption } from '../../model/adoption';
import { AdoptionService } from '../../services/adoption.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-adoption-approve',
  templateUrl: './adoption-approve.component.html',
  styleUrl: './adoption-approve.component.css'
})
export class AdoptionApproveComponent implements OnInit {

  adoption: Adoption = new Adoption();
  adoptionId: number = 0;
  rejectionReason?: string = undefined;
  message?: string = undefined;
  
  constructor(private adoptSvc: AdoptionService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void{
    this.route.params.subscribe({
      next:(parms)=> {
        this.adoptionId = parms['id'];
        console.log("id = ",this.adoptionId);
        this.adoptSvc.getAdoptionById(this.adoptionId).subscribe({
          next: (parms) => {
            this.adoption = parms;
            console.log("rejectionReason = ",this.adoption.rejectionReason);
            if(!this.adoption.rejectionReason){
              this.approve();
            }
            else{
              this.reject();
            }
      
          },
        });
      },
      error: (err) => {
        console.log('Error in Adoption: ', err);
      },
      complete: () => {},
    });
}


   


    
      approve(): void {
        console.log('id= ',this.adoption.id);
     this.adoptSvc.approveAdoption(this.adoption.id).subscribe({
       next: (resp) => {
         this.adoption = resp;
         console.log('approved adoption', this.adoption.status);
         this.router.navigateByUrl('/review/review');
       },
       error: (err) => {
         console.log("Error creating Adoption: ", err);
         this.message = "Error creating Adoption.";
       },
       complete: () => {}
     });
   
   
   }
   
   reject(): void{
     console.log("Adoption to reject Id"+this.adoption.id);
     this.rejectionReason = this.adoption.rejectionReason;
     this.adoptSvc.rejectAdoption(this.adoption.id, this.rejectionReason).subscribe({
       next: (resp) => {
         this.adoption = resp;
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


