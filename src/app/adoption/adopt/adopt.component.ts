import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../../services/adoption.service';
import { Adoption } from '../../model/adoption';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrl: './adopt.component.css'
})
export class AdoptComponent implements OnInit{
  adoptions: Adoption[] = [];
  title: string = "Ready to Adopt";

  constructor(
    private adoptSvc: AdoptionService
  ){}

  ngOnInit(): void{

    this.adoptSvc.getAllAdoptionForApprove().subscribe({
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
