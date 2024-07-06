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

  constructor(private petSvc: PetService,
    private speciesSvc: SpeciesService,
    private breedSvc: BreedService,
    private adoptionSvc: AdoptionService,
    private route: ActivatedRoute,
    private sysSvc: SystemService){}

  ngOnInit(): void{
    this.sysSvc.checkLogin();
    this.route.params.subscribe({
      next: (parms) => {
        this.adoptionId = parms['id'];
        this.adoptionSvc.getAdoptionById(this.adoptionId).subscribe({
          next:(resp)=>{
            this.adoption = resp;
          },
          error:(err)=>{
            console.log(err);
          },
          complete:()=>{}
        });
    console.log('OnInit');
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
console.log('getBreeds for selectedSpeices: '+this.selectedSpecies.name);
    // Make sure you have a back end method to getBreedBySpecies
    // Call that service method here rather than getAllBreeds()
    this.speciesId = this.selectedSpecies.id;
    console.log('speciesId: ',this.speciesId);
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
    console.log("Breed",this.breedId);
    console.log('selected breed'+ this.selectedBreed.name);
    this.petSvc.getPetByBreeds(this.breedId).subscribe({
      next:(resp)=> {
        this.pets = resp;
      },
      error:(err)=> {
        console.log(err);
      },
      complete:()=> {}
    });
  }

  select():void{
    this.petId = this.selectedPet.id;
    this.whenSelected = true;
    this.petSvc.getPetById(this.petId).subscribe({
      next:(resp)=>{
        this.pet = resp;
      },
      error:(err)=> {
        console.log(err);
      },
      complete:()=> {}
    });

  }
  holdPet(): void{
    this.adoption.pet.id = this.selectedPet.id;
    
    this.adoptionSvc.holdAdoption(this.adoptionId).subscribe({
      next:(resp)=>{
        this.adoption = resp;
        console.log('status: ',this.adoption.status);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{}
    });

    console.log('petId :',this.adoption.pet.id);
    console.log('adoption request on hold',this.adoption.customer, this.adoption.status);
  }
}