import { Component, OnInit } from '@angular/core';
import { Species } from '../../../model/species';
import { SpeciesService } from '../../../services/species.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrl: './species-list.component.css'
})
export class SpeciesListComponent implements OnInit {
  title: string = "Species-List";
  speciess?: Species[] = undefined;
  species: Species | undefined;

  constructor(private speciesSvc: SpeciesService){}
  ngOnInit(): void{

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

}
