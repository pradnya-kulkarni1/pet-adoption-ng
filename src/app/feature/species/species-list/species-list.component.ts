import { Component, OnInit } from '@angular/core';
import { Species } from '../../../model/species';
import { SpeciesService } from '../../../services/species.service';
import { SystemService } from '../../../services/system.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrl: './species-list.component.css'
})
export class SpeciesListComponent implements OnInit {
  title: string = "Species-List";
  speciess?: Species[] = undefined;
  species: Species | undefined;
  userId:number=0;
  isUser:boolean=false;

  constructor(private speciesSvc: SpeciesService,
    private systemSvc:SystemService
  ){}
  ngOnInit(): void{

    this.userId=this.systemSvc.loggedInUser.id;
    if (this.userId ==0){
      this.isUser = false;
     } else if(this.userId !=0) this.isUser=true;
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
