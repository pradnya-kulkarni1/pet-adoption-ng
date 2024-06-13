import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reference } from '../../../model/reference';
import { ReferenceService } from '../../../services/reference.service';

@Component({
  selector: 'app-reference-create',
  templateUrl: './reference-create.component.html',
  styleUrl: './reference-create.component.css'
})
export class ReferenceCreateComponent implements OnInit{
  title: string = 'Reference-Create';
  reference: Reference = new Reference();
  message?: string = undefined;
  

  constructor(private referenceSvc: ReferenceService, private router: Router) { }

  ngOnInit(): void {
  }

  save(): void{

    this.referenceSvc.createReference(this.reference).subscribe({
      next: (resp) => {
        this.reference = resp;
        this.router.navigateByUrl('/adopt/request');
      },
      error: (err) => {
        console.log("Error creating reference: ", err);
        this.message = "Error creating Reference";
      },
      complete: () => {}

    });
  }
}