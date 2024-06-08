import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../../../services/species.service';
import { Species } from '../../../model/species';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-species-edit',
  templateUrl: './species-edit.component.html',
  styleUrl: './species-edit.component.css'
})
export class SpeciesEditComponent implements OnInit{
  title: string = 'Species - Edit';
  species: Species = new Species();
  message?: string = undefined;
  speciesId: number = 0;

constructor(private speciesSvc:SpeciesService, private router: Router,
  private route: ActivatedRoute
){}
  ngOnInit(): void{
    this.route.params.subscribe({
      next: (parms) => {
        this.speciesId = parms['id'];
        this.speciesSvc.getSpeciesById(this.speciesId).subscribe({
          next: (parms) => {
            this.species = parms;
          },
        });
      },
      error: (err) => {
        console.log('Error editing Specie: ', err);
      },
      complete: () => {},
    });


  }

  save(): void {
    this.speciesSvc.updateSpecies(this.species).subscribe({
      next: (resp) => {
        this.species = resp;
        this.router.navigateByUrl('/species/list');
      },
      error: (err) => {
        console.log('Error updating breed: ', err);
        this.message = 'Error updating Breed.';
      },
      complete: () => {},
    });
  }

}
