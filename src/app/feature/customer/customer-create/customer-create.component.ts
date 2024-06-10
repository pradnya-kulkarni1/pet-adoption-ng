import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.css'
})
export class CustomerCreateComponent implements OnInit {
  title: string = 'Customer-Create';
  customer: Customer = new Customer();
  message?: string = undefined;
  
  constructor(private customerSvc: CustomerService, private router: Router){}

  ngOnInit(): void{
    
  }
  save(): void{

    this.customerSvc.createCustomer(this.customer).subscribe({
      next: (resp) => {
        this.customer = resp;
        this.router.navigateByUrl('/customer/list');
      },
      error: (err) => {
        console.log("Error creating customer: ", err);
        this.message = "Error creating Customer";
      },
      complete: () => {}

    });
  }
}
