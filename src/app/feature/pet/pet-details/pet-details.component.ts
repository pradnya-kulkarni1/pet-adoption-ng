import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../model/pet';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../../services/pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent implements OnInit{
  title: string = "Pet- Details";
  pet: Pet = new Pet();
  petId : number = 0;
  message?: string = undefined;

  constructor(private petSvc:PetService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.route.params.subscribe({
      next:(parms)=>{
      this.petId = parms['id'];
      this.petSvc.getPetById(this.petId).subscribe({
        next:(parms)=>{
          this.pet = parms;
        },
        error:(err)=> {
          console.log('Error getting pet by id:', err);
        },
complete:() => {}
      });
      },
      error:(err)=>{
        console.log('Error getting id from url: ', err);
      },
      complete:()=> {}
    });
    
  }

  delete(){
    this.petSvc.deletePet(this.petId).subscribe({
      next:(resp) => {
        if (resp == false){
          console.log('PetDetailsComponent - error deleting pet.');
          this.message = 'PetDetailsComponent - error deleting pet';
        } else {
          this.router.navigateByUrl('/pet/list');
        }
      },
      error:(err)=> {
        console.log('PetDetailComponent - Error deleting pet: '+err.message);
        this.message = 'ProductDetailComponent - error deleting pet: '+ err.message;
      },
      complete:()=>{},
    });
  }
}
