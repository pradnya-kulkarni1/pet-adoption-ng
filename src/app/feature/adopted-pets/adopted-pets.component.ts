import { Component, OnInit } from '@angular/core';
import { Adoption } from '../../model/adoption';
import { SystemService } from '../../services/system.service';
import { AdoptionService } from '../../services/adoption.service';

@Component({
  selector: 'app-adopted-pets',
  templateUrl: './adopted-pets.component.html',
  styleUrl: './adopted-pets.component.css'
})
export class AdoptedPetsComponent implements OnInit{
  title: string = 'Adopted Pets List';
  adoptions: Adoption[] = [];

  constructor(private adoptSvc: AdoptionService,
    private sysSvc: SystemService
  ){}

  ngOnInit():void { 
    this.sysSvc.checkLogin();
    this.adoptSvc.getAllAdoptedAdoptions().subscribe({
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


