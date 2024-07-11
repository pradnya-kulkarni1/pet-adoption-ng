import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/pet';
import { PetService } from '../../services/pet.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
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