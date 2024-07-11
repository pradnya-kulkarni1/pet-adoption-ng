import { Component, OnInit } from '@angular/core';
import { Species } from '../../../model/species';
import { SpeciesService } from '../../../services/species.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../../services/system.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrl: './species-details.component.css'
})
export class SpeciesDetailsComponent implements OnInit {
  speciesId: number = 0;
  species: Species = new Species();
  message?: string = undefined;
  title: string = "Species - Detail";
  isUser:boolean=false;
  userId:number=0;
  

  constructor(private route: ActivatedRoute, private speciesSvc: SpeciesService,
    private systemSvc: SystemService,
    private router: Router){}
  ngOnInit(): void{
    this.userId=this.systemSvc.loggedInUser.id;
    if (this.userId ==0){
      this.isUser = false;
     } else if(this.userId !=0) this.isUser=true;
    this.route.params.subscribe({
      next: (parms) => {
        this.speciesId = parms['id'];
        this.speciesSvc.getSpeciesById(this.speciesId).subscribe({
          next: (parms) => {
            this.species = parms;
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

  delete(): void{this.speciesSvc.deleteSpecies(this.speciesId).subscribe({
    next: (resp) => {
      if (resp == false) {
        console.log('SpecieDetailComponent - error deleting specie.');
        this.message = 'SpecieDetailComponent - error deleting specie.';
      } else {
        this.router.navigateByUrl('/species/list');
      }
    },
    error: (err) => {
      console.log(
        'SpeciesDetailComponent - Error deleting specie: ' + err.message
      );
      this.message =
        'SpeciesDetailComponent - error deleting specie: ' + err.message;
    },
    complete: () => {},
  });
}

  }

