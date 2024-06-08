import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{
  title: string = 'Customer-List';
  customers?: Customer [] = undefined;
  message?: string = undefined;

  constructor(private customerSvc: CustomerService){}

  ngOnInit():void{

    this.customerSvc.getAllCustomers().subscribe({
      next:(resp)=>{
        this.customers = resp;
      },
      error:(err)=>{
        console.log(err);
      },
      complete: ()=> {}
    });
  

  }
}
