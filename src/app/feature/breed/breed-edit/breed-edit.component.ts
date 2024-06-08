import { Component, OnInit } from '@angular/core';
import { Species } from '../../../model/species';
import { Breed } from '../../../model/breed';
import { BreedService } from '../../../services/breed.service';
import { SpeciesService } from '../../../services/species.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-breed-edit',
  templateUrl: './breed-edit.component.html',
  styleUrl: './breed-edit.component.css'
})
export class BreedEditComponent implements OnInit {
 
  title: string = 'Breed-Edit';
  breed: Breed = new Breed();
  breedId: number = 0;
  speciess: Species[] = [];
  message?: string = undefined;

constructor(private router:Router,
       private route: ActivatedRoute, 
       private speciesSvc:SpeciesService, 
       private breedSvc: BreedService){}


  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parms) => {
        this.breedId = parms['id'];
        this.breedSvc.getBreedById(this.breedId).subscribe({
          next: (parms) => {
            this.breed = parms;
          },
        });
      },
      error: (err) => {
        console.log('Error editing Breed: ', err);
      },
      complete: () => {},
    });

    this.speciesSvc.getAllSpeciess().subscribe({
      next:(parms)=>{
        this.speciess = parms;     
      },
      error: (err) => {
        console.log('Breed Create - error getting Species.');
      },
      complete: () => {},
    });
  }
  save(): void {
    this.breedSvc.updateBreed(this.breed).subscribe({
      next: (resp) => {
        this.breed = resp;
        this.router.navigateByUrl('/breed/list');
      },
      error: (err) => {
        console.log('Error updating breed: ', err);
        this.message = 'Error updating Breed.';
      },
      complete: () => {},
    });
  }
  
}
