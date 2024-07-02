import { Component, OnInit } from '@angular/core';
import { Adoption } from '../../model/adoption';
import { AdoptionService } from '../../services/adoption.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-adoption-approve',
  templateUrl: './adoption-approve.component.html',
  styleUrl: './adoption-approve.component.css'
})
export class AdoptionApproveComponent implements OnInit {

  adoption: Adoption = new Adoption();
  adoptionId: number = 0;
  rejectionReason?: string = undefined;
  message?: string = undefined;
  
  constructor(private adoptSvc: AdoptionService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void{
    this.route.params.subscribe({
      next:(parms)=> {
        this.adoptionId = parms['id'];
        console.log("id = ",this.adoptionId);
        this.adoptSvc.getAdoptionById(this.adoptionId).subscribe({
          next: (parms) => {
            this.adoption = parms;
          
      
          },
        });
      },
      error: (err) => {
        console.log('Error in Adoption: ', err);
      },
      complete: () => {},
    });
}


   


    
    
  }


