import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../model/pet';
import { Breed } from '../../../model/breed';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BreedService } from '../../../services/breed.service';
import { PetService } from '../../../services/pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrl: './pet-edit.component.css'
})
export class PetEditComponent implements OnInit {

  title: string = 'Pet - Edit';
  pet: Pet = new Pet();
  petId: number = 0;
  breeds: Breed[] = [];
  message?: string = undefined;

  constructor(private petSvc: PetService,
    private breedSvc: BreedService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void{
    this.route.params.subscribe({
      next:(parms)=>{
        this.petId = parms['id'];
        this.petSvc.getPetById(this.petId).subscribe({
          next:(parms)=> {
            this.pet = parms;
          },
        });
      },
      error:(err)=> {
        console.log('Error edititing Pet: ', err);
      },
      complete:()=>{},
    });
  }

  save(): void{
    this.petSvc.updatePet(this.pet).subscribe({
      next:(resp)=>{
        this.pet = resp;
        this.router.navigateByUrl('/pet/list');
      },
      error:(err)=> {
        console.log('Error updating pet: ', err);
        this.message = 'Error updating pet. ';
      },
      complete: () => {},
    });
  }

}
