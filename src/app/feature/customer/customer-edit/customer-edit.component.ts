import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css'
})
export class CustomerEditComponent implements OnInit{
  title: string = "Customer - Edit";
  customer: Customer = new Customer();
  customerId: number = 0;
  message?: string = undefined;

  constructor(private customerSvc: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.route.params.subscribe({
      next:(parms)=>{
        this.customerId = parms['id'];
        this.customerSvc.getCustomerById(this.customerId).subscribe({
          next:(parms)=> {
            this.customer = parms;
          },
        });
      },
      error:(err)=> {
        console.log('Error editing customer: ', err);
      },
      complete:() => {}
    });
    
  }

  save(): void{
    this.customerSvc.updateCustomer(this.customer).subscribe({
      next: (resp)=> {
        this.customer = resp;
        this.router.navigateByUrl('/customer/list');
      },
      error:(err) => {
        console.log('Error updating Customer: ', err);
        this.message = 'Errpr updating customer.';
      },
      complete:() => {},
    });
  }
}
