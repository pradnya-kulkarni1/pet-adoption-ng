import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pet } from '../../model/pet';
import { PetService } from '../../services/pet.service';
import { SystemService } from '../../services/system.service';
import { SpeciesService } from '../../services/species.service';
import { Species } from '../../model/species';
import { BreedService } from '../../services/breed.service';
import { Breed } from '../../model/breed';
import { Adoption } from '../../model/adoption';
import { AdoptionService } from '../../services/adoption.service';
import { ActivatedRoute } from '@angular/router';
import { AdoptionRequestService } from '../../services/adoption-request.service';
import { AdoptionRequest } from '../../model/adoptionRequest';

@Component({
  selector: 'app-available-pet',
  templateUrl: './available-pet.component.html',
  styleUrl: './available-pet.component.css'
})
export class AvailablePetComponent implements OnInit{
  title: string = "Available-Pets";
  pets: Pet[] = [];
  pet: Pet = new Pet();
  speciess: Species[] = [];
  breeds: Breed[] = [];
  selectedSpecies: Species = new Species();
  selectedBreed: Breed = new Breed();
  selectedPet: Pet = new Pet();
  speciesId?: number = undefined;
  breedId?: number = undefined;
  petId?: number = undefined;
  whenSelected: boolean = false;
  adoption: Adoption = new Adoption();
  adoptionId: number = 0; 
  adoptReqId:number=0;
  adoptReq: AdoptionRequest = new AdoptionRequest();
  availablePet: boolean = true;

  constructor(private petSvc: PetService,
    private speciesSvc: SpeciesService,
    private breedSvc: BreedService,
    private adoptionSvc: AdoptionService,
    private adoptReqSvc: AdoptionRequestService,
    private route: ActivatedRoute,
    private sysSvc: SystemService){}

  ngOnInit(): void{
    this.sysSvc.checkLogin();
    this.route.params.subscribe({
      next: (parms) => {
        this.adoptReqId = parms['id'];
        this.adoptReqSvc.getAdoptionRequestById(this.adoptReqId).subscribe({
          next:(resp)=>{
            this.adoptReq= resp;
            this.adoption.adoptionRequest.id=this.adoptReq.id;

          },
          error:(err)=>{
            console.log(err);
          },
          complete:()=>{}
        });

    this.speciesSvc.getAllSpeciess().subscribe({

      next:(resp)=> {
        this.speciess = resp;
      },
      error:(err)=> {
        console.log(err);
      },
      complete:()=>{}
    });
  },
  error: (err) => {
    console.log('Error getting id from url: ', err);
  },
  complete: () => {},
    
  });
  
  }
  
  getBreeds(): void{
  
    this.speciesId = this.selectedSpecies.id;
    this.breedSvc.getBreedsBySpecies(this.speciesId).subscribe({
      next:(resp)=> {
        this.breeds = resp;

      },
      error:(err)=> {
        console.log(err);
      },
      complete:() => {}
    });
  }

  getPets(): void{
    this.breedId = this.selectedBreed.id;
    this.petSvc.getPetByBreeds(this.breedId).subscribe({
      next:(resp)=> {
        this.pets = resp;
        this.availablePet = this.pets.some(pet => pet.available);
        if (!this.availablePet) {
          this.availablePet = false;
        }
      },
      error:(err)=> {
        console.log(err);
      },
      complete:()=> {}
    });
  }

  select():void{
    this.petId = this.selectedPet.id;
    this.selectedPet.available=false;
    this.whenSelected = true;
    this.petSvc.getPetById(this.petId).subscribe({
      next:(resp)=>{
        this.pet = resp;
        this.pet.available=false;
        this.adoption.pet.id=this.pet.id;
      },
      error:(err)=> {
        console.log(err);
      },
      complete:()=> {}
    });

  }
  holdPet(): void{
    
    this.adoption.pet.id = this.pet.id;
  
    this.adoptReqSvc.holdAdoption(this.adoptReqId).subscribe({
      next:(resp)=>{
        this.adoptReq= resp;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{}
    });

    this.adoptionSvc.createAdoption(this.adoption).subscribe({
      next:(resp)=>{
        this.adoption=resp;
        this.adoption.pet.available=false;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{}
    });
    
   
  }
}