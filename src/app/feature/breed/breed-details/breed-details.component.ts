import { Component, OnInit } from '@angular/core';
import { Breed } from '../../../model/breed';
import { ActivatedRoute, Router } from '@angular/router';
import { BreedService } from '../../../services/breed.service';
import { SystemService } from '../../../services/system.service';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrl: './breed-details.component.css'
})
export class BreedDetailsComponent implements OnInit {
  title: string = 'Breed Detail';
  breed: Breed = new Breed();
  breedId: number = 0;
  message?: string = undefined;
  isUser:boolean=false;
  userId: number=0;

  constructor(private breedSvc: BreedService,
    private router: Router,
    private systemSvc:SystemService,
    private route: ActivatedRoute){}

  
  ngOnInit(): void {
    this.userId=this.systemSvc.loggedInUser.id;
    if (this.userId ==0){
      this.isUser = false;
     } else if(this.userId !=0) this.isUser=true;
    this.route.params.subscribe({
      next: (parms) => {
        this.breedId = parms['id'];
        this.breedSvc.getBreedById(this.breedId).subscribe({
          next: (parms) => {
            this.breed = parms;
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

  delete(): void{this.breedSvc.deleteBreed(this.breedId).subscribe({
    next: (resp) => {
      if (resp == false) {
        console.log('BreedDetailComponent - error deleting breed.');
        this.message = 'BreedDetailComponent - error deleting breed.';
      } else {
        this.router.navigateByUrl('/breed/list');
      }
    },
    error: (err) => {
      console.log(
        'BreedDetailComponent - Error deleting breed: ' + err.message
      );
      this.message =
        'BreedDetailComponent - error deleting breed: ' + err.message;
    },
    complete: () => {},
  });
}

}
