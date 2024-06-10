import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit{
  title: string = "Customer- Detail";
  customer: Customer = new Customer();
  customerId: number = 0;
  message?: string = undefined;

  constructor(private customerSvc: CustomerService, private router: Router, 
    private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.params.subscribe({
      next:(parms)=>{
        this.customerId = parms['id'];
        this.customerSvc.getCustomerById(this.customerId).subscribe({
          next:(parms)  =>{
            this.customer = parms;
          },
          error:(err)=>{
            console.log('Error getting custoer bby id: ', err);
          },
          complete:()=> {}
        });
      },
      error:(err)=> {
        console.log('Error getting id form url: ', err);
      },
      complete: () => {},
    });
    
  }
  delete(): void{
    this.customerSvc.deleteCustomer(this.customerId).subscribe({
      next: (resp)=>{
        if(resp == false){
          console.log('CustomerDetailComponent - errordeleteing customer');
          this.message = 'UserDetailComponent - error deleting customer.';
        } else {
          this.router.navigateByUrl('/customer/list');
        }
      },
      error: (err)=> {
        console.log('UserDEtailComponent - Error deleting customer: '+ err.message);
      
      this.message = 'CustomeDetailComponent - error deleting customer: '+ err.message;
      },
      complete: ()=> {},
    });

  }
}
