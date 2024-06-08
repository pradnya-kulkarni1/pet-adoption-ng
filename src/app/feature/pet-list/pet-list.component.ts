import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/pet';
import { SystemService } from '../../services/system.service';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent implements OnInit{
  title: string = "Pet-List";
  pets?: Pet[] = undefined;

  constructor(private petSvc: PetService,
    private sysSvc: SystemService){}


  ngOnInit(): void{
    this.petSvc.getAllPets().subscribe({
      next:(resp)=> {
        this.pets = resp;
      },
      error:(err)=> {
        console.log(err);
      },
      complete:()=> {}
    })

  }

}
