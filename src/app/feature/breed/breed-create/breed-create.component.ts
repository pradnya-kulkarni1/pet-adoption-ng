import { Component, OnInit } from '@angular/core';
import { BreedService } from '../../../services/breed.service';
import { Router } from '@angular/router';
import { Breed } from '../../../model/breed';
import { SpeciesService } from '../../../services/species.service';
import { Species } from '../../../model/species';

@Component({
  selector: 'app-breed-create',
  templateUrl: './breed-create.component.html',
  styleUrl: './breed-create.component.css'
})
export class BreedCreateComponent implements OnInit{
  breed: Breed = new Breed();
  message?: string = undefined;
  title: string = 'Breed-Create';
  speciess: Species[] = [];

  constructor(private breedSvc: BreedService, private router: Router, private speciesSvc:SpeciesService){}

  ngOnInit(): void{
    this.speciesSvc.getAllSpeciess().subscribe({
      next:(resp) => {
        this.speciess = resp;
      },
      error:(err)=> {
        console.log('Species - create - error getting species');
      },
      complete: () => {},
    });
    
  }
  save(): void{

    this.breedSvc.createBreed(this.breed).subscribe({
      next: (resp) => {
        this.breed = resp;
        this.router.navigateByUrl('/breed/list');
      },
      error: (err) => {
        console.log("Error creating breed: ", err);
        this.message = "Error creating Breed";
      },
      complete: () => {}

    });
  }
}
