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
rejectionReason?: string = undefined;

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

// updateadopt(): void{
//   this.adoptSvc.saveAdoptionWithReason(this.adoption.id,this.adoption.rejectionReason,).subscribe({
//     next:(parms)=>{
//       this.adoption = parms;
//       console.log("from update method rejectionReason : ",this.adoption.rejectionReason);
//     },
//     error:(err)=>{
//       console.log('Error updating Adoption: ', err);
//     },
//     complete:()=>{},

//   });


// }
}
