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

}
