import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../model/pet';
import { Breed } from '../../../model/breed';
import { Router } from '@angular/router';
import { PetService } from '../../../services/pet.service';
import { BreedService } from '../../../services/breed.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrl: './pet-create.component.css'
})
export class PetCreateComponent implements OnInit{
  title: string = "Pet- Create";
  pet: Pet = new Pet();
  message?: string = undefined;
  breeds: Breed[] = [];

  constructor(private petSvc: PetService, private breedSvc: BreedService,
    private router: Router){}

  ngOnInit(): void{
    this.breedSvc.getAllBreeds().subscribe({
      next:(resp) => {
        this.breeds = resp;
      },
      error:(err)=> {
        console.log('Pet-create - error getting  breeds');
      },
      complete:()=>{}
    });

  }
  save(): void{
    this.petSvc.createPet(this.pet).subscribe({
      next:(resp)=>{
        this.pet = resp;
        this.router.navigateByUrl('/pet/list');
      },
      error:(err) => {
        console.log('Error creating pet: ',err);
        this.message = 'Error creating pet';
      },
      complete:()=>{}
    });
    
  }
}
