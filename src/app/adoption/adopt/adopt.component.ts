import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../../services/adoption.service';
import { Adoption } from '../../model/adoption';
import { SystemService } from '../../services/system.service';
import { ActivatedRoute } from '@angular/router';
import { AdoptionRequestService } from '../../services/adoption-request.service';
import { AdoptionRequest } from '../../model/adoptionRequest';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrl: './adopt.component.css'
})
export class AdoptComponent implements OnInit{
  adoptionRequests: AdoptionRequest[] = [];
  requestOnHold: AdoptionRequest[] = [];
  title: string = "Ready to Adopt";
  adoptionRequestId: number=0;
  availablePet:boolean= true;

  constructor(
    private adoptRequestSvc: AdoptionRequestService,
    private sysSvc: SystemService,
  ){}

  ngOnInit(): void{

    this.sysSvc.checkLogin();

    this.adoptRequestSvc.getAllAdoptionForApprove().subscribe({
      next:(parms)=>{
        this.adoptionRequests = parms;
      },
      error:(err)=>{
        console.log('Error getting Adoption Requests: ', err);
      },
      complete:()=>{},
    });

    
    this.adoptRequestSvc.getAllAdoptionOnHold().subscribe({
      next:(parms)=>{
        this.requestOnHold = parms;
      },
      error:(err)=>{
        console.log('Error getting Adoption Requests: ', err);
      },
      complete:()=>{},
    });
  
  }
  }

