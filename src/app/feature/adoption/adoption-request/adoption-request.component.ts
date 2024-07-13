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
import { AdoptionRequest } from '../../../model/adoptionRequest';
import { AdoptionRequestService } from '../../../services/adoption-request.service';

@Component({
  selector: 'app-adoption-request',
  templateUrl: './adoption-request.component.html',
  styleUrl: './adoption-request.component.css'
})
export class AdoptionRequestComponent implements OnInit{
  title: string = "Adoption - Request";
  adoptionRequest :AdoptionRequest = new AdoptionRequest();
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
  adoption: Adoption = new Adoption();
 
  

  constructor(private adoptReqSvc: AdoptionRequestService, private sysSvc: SystemService, 
    private custSvc: CustomerService,
    private petSvc: PetService,
    private referenceSvc: ReferenceService,
    private adoptReferenceSvc: AdoptReferenceService,
    private adoptSvc: AdoptionService,
  private router: Router){}

  ngOnInit(): void{

    this.sysSvc.checkLogin();
    this.adoptionRequest.user = this.sysSvc.loggedInUser;
 
    this.custSvc.getAllCustomers().subscribe({
      next:(resp)=>{
        this.customers = resp;
      },
      error:(err)=>{
        console.log(err);
      },
      complete: ()=> {}
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
    console.log('customer and reference ',this.adoptionRequest.customer, this.adoptionRequest.reference);
    this.adoptReqSvc.createAdoptionRequest(this.adoptionRequest).subscribe({
      next:(resp)=>{
        this.adoptionRequest = resp;
        this.adoption.adoptionRequest.id = this.adoptionRequest.id;
        console.log("Adoption customer and user", this.customer.firstname, this.user.firstname);
        this.router.navigateByUrl('/review/review');
      },
      error:(err)=>{
        console.log("Error creating request: ",err);
        this.message = "Error creating request.";
      },
      complete:()=>{}
    });
   

  }

}
 