import { Component, OnInit } from '@angular/core';
import { Breed } from '../../../model/breed';
import { SystemService } from '../../../services/system.service';
import { BreedService } from '../../../services/breed.service';
import { Species } from '../../../model/species';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrl: './breed-list.component.css'
})
export class BreedListComponent implements OnInit {
  title: string = "Breed-List";
  breeds?: Breed[] = undefined;
  //species: Species = new Species();

  constructor(private breedSvc:BreedService,
    private sysSvc: SystemService){}

  ngOnInit(): void{

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
