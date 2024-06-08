import { Component, OnInit } from '@angular/core';
import { Species } from '../../../model/species';
import { SpeciesService } from '../../../services/species.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-species-create',
  templateUrl: './species-create.component.html',
  styleUrl: './species-create.component.css'
})
export class SpeciesCreateComponent implements OnInit {
title: string = "Species Create";
species: Species = new Species();
message?: string = undefined;

constructor(private speciesSvc: SpeciesService, private router: Router ){}
  ngOnInit(): void{
   
  }

  save(): void{
    this.speciesSvc.createSpecies(this.species).subscribe({
      next:(resp)=>{
        this.species = resp;
        this.router.navigateByUrl("/species/list");
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=> {}
    })

  }
}
