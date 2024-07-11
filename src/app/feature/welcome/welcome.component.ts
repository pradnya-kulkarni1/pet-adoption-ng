import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/pet';
import { PetService } from '../../services/pet.service';
import { SystemService } from '../../services/system.service';
import { Breed } from '../../model/breed';
import { BreedService } from '../../services/breed.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  title: string = "Pet-List";
  pets: Pet[] = [];
  breeds: Breed[] = [];
  breedId: number = 0;
  selectedBreed: Breed = new Breed();

  constructor(private petSvc: PetService,
    private breedSvc: BreedService,
    private sysSvc: SystemService){}


  ngOnInit(): void{
    this.petSvc.getAllPets().subscribe({
      next:(resp)=> {
        this.pets = resp;
      },
      error:(err)=> {
        console.log(err);
      },
      complete:()=> {}
    });

    this.breedSvc.getAllBreeds().subscribe({
      next:(resp)=> {
        this.breeds = resp;

      },
      error:(err)=> {
        console.log(err);
      },
      complete:() => {}
    });

  }


}