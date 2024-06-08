import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:8080/api/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get(URL+'/') as Observable<Customer[]>;
  }
  
  getCustomerById(id:number):Observable<Customer> {
    return this.http.get(URL + '/'+id) as Observable<Customer>;
  }
  
  createCustomer( Customer:Customer): Observable<Customer>{
    return this.http.post(URL, Customer) as Observable<Customer>;
  }
  
  updateCustomer(Customer: Customer):Observable<Customer> {
    return this.http.put(URL + '/'+Customer.id,Customer) as Observable<Customer>;
  }
  
  deleteCustomer(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
  }

}
