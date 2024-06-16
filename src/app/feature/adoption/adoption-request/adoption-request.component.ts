import { Component, OnInit } from '@angular/core';
import { Adoption } from '../../../model/adoption';
import { User } from '../../../model/user';
import { Customer } from '../../../model/customer';
import { AdoptionService } from '../../../services/adoption.service';
import { SystemService } from '../../../services/system.service';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';
import { ReferenceService } from '../../../services/reference.service';
import { Reference } from '../../../model/reference';
import { AdoptReferenceService } from '../../../services/adopt-reference.service';
import { AdoptReference } from '../../../model/adoptReference';
import { Pet } from '../../../model/pet';
import { PetService } from '../../../services/pet.service';

@Component({
  selector: 'app-adoption-request',
  templateUrl: './adoption-request.component.html',
  styleUrl: './adoption-request.component.css'
})
export class AdoptionRequestComponent implements OnInit{
  title: string = "Adoption - Request";
  adoption:Adoption = new Adoption();
  user: User = new User();
  customer: Customer = new Customer();
  message?: string = undefined;
  customers: Customer[] = [];
  references1: Reference[] = [];
  references2: Reference[] = [];
  reference1: Reference = new Reference();
  reference2: Reference = new Reference();
  adoptReference: AdoptReference = new AdoptReference();
  customerId?: number = undefined;
  referenceId?: number = undefined;
  pets: Pet[] = [];
  pet: Pet = new Pet();
 
  

  constructor(private adoptSvc: AdoptionService, private sysSvc: SystemService, 
    private custSvc: CustomerService,
    private petSvc: PetService,
    private referenceSvc: ReferenceService,
    private adoptReferenceSvc: AdoptReferenceService,
  private router: Router){}

  ngOnInit(): void{

    this.sysSvc.checkLogin();
    this.adoption.user = this.sysSvc.loggedInUser;
    
    this.custSvc.getAllCustomers().subscribe({
      next:(resp)=>{
        this.customers = resp;
      },
      error:(err)=>{
        console.log(err);
      },
      complete: ()=> {}
    });
    this.petSvc.getPetById(1).subscribe({
      next:(resp)=>{
        this.pet = resp;
        this.adoption.pet = this.pet;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{}
    });
    
    this.referenceSvc.getAllReferences().subscribe({
      next:(resp)=>{
        this.references1 = resp;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{}
    });
    
    this.referenceSvc.getAllReferences().subscribe({
      next:(resp)=>{
        this.references2 = resp;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{}
    });
  }
  submit(): void{
    this.adoptSvc.createAdoption(this.adoption).subscribe({
      next:(resp)=>{
        this.adoption = resp;
        console.log("Adoption customer and user", this.customer.firstname, this.user.firstname);
        this.router.navigateByUrl('review/review');
      },
      error:(err)=>{
        console.log("Error creating request: ",err);
        this.message = "Error creating request.";
      },
      complete:()=>{}
    });

  }

}
 