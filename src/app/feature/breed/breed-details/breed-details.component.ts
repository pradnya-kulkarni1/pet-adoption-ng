import { Component, OnInit } from '@angular/core';
import { Breed } from '../../../model/breed';
import { ActivatedRoute, Router } from '@angular/router';
import { BreedService } from '../../../services/breed.service';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrl: './breed-details.component.css'
})
export class BreedDetailsComponent implements OnInit {
  title: string = 'Breed Detail';
  breed: Breed = new Breed();
  breedId: number = 0;
  message?: string = undefined;
  constructor(private breedSvc: BreedService,
    private router: Router,
    private route: ActivatedRoute){}

  
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parms) => {
        this.breedId = parms['id'];
        this.breedSvc.getBreedById(this.breedId).subscribe({
          next: (parms) => {
            this.breed = parms;
          },
          error: (err) => {
            console.log('Error getting user by id: ', err);
          },
          complete: () => {}
        });
      },
      error: (err) => {
        console.log('Error getting id from url: ', err);
      },
      complete: () => {},
    });
  }

  delete(): void{
    
  }

}
