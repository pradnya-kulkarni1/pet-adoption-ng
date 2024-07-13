import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../../services/adoption.service';
import { Adoption } from '../../model/adoption';
import { SystemService } from '../../services/system.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adoption-final',
  templateUrl: './adoption-final.component.html',
  styleUrl: './adoption-final.component.css'
})
export class AdoptionFinalComponent implements OnInit{
  title: string = 'Adoption-Final';
  adoptions: Adoption[] =[];
  adoptionsOnHold: Adoption[] = [];
  adopted: Adoption = new Adoption();
  status: string = '';
  paperWorkCompleted: boolean = false;
  paymentRecieved: boolean = false;
  adoptedPet: boolean= false;
  adoptionId: number = 0;

  constructor(
    private adoptionSvc: AdoptionService,
    private sysSvc: SystemService,
    private route: ActivatedRoute
  ){}

  ngOnInit():void{
    this.sysSvc.checkLogin();

    this.adoptionSvc.getAllAdoptions().subscribe({
      next:(resp)=>{
        this.adoptions = resp;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{}
    });
  }
  

  done(id: number): void{
    this.adoptionSvc.completeAdoption(id).subscribe({
      next:(resp)=>{
        this.adopted=resp;
        this.adoptedPet = true;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{}
    });


  }

}
