import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pet } from '../../model/pet';
import { PetService } from '../../services/pet.service';
import { SystemService } from '../../services/system.service';
import { SpeciesService } from '../../services/species.service';
import { Species } from '../../model/species';
import { BreedService } from '../../services/breed.service';
import { Breed } from '../../model/breed';

@Component({
  selector: 'app-available-pet',
  templateUrl: './available-pet.component.html',
  styleUrl: './available-pet.component.css'
})
export class AvailablePetComponent implements OnInit{
  title: string = "Available-Pets";
  pets: Pet[] = [];
  pet: Pet = new Pet();
  femalePets: Pet[] = [];
  speciess: Species[] = [];
  breeds: Breed[] = [];
  selectedSpecies: Species = new Species();
  selectedBreed: Breed = new Breed();
  selectedPet: Pet = new Pet();
  speciesId?: number = undefined;
  breedId?: number = undefined;
  petId?: number = undefined;
  whenSelected: boolean = false;

  constructor(private petSvc: PetService,
    private speciesSvc: SpeciesService,
    private breedSvc: BreedService,
    private sysSvc: SystemService){}

  ngOnInit(): void{
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
    })

  }
}