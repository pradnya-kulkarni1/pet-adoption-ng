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
  userId:number=0;
  isUser:boolean=false;
  //species: Species = new Species();

  constructor(private breedSvc:BreedService,
    private sysSvc: SystemService){}

  ngOnInit(): void{
    this.userId=this.sysSvc.loggedInUser.id;
    if (this.userId ==0){
      this.isUser = false;
     } else if(this.userId !=0) this.isUser=true;

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
