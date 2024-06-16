import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adoption } from '../model/adoption';

const URL: string = 'http://localhost:8080/api/adoptions';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  constructor(private http: HttpClient) { }

  getAllAdoptions(): Observable<Adoption[]> {
    return this.http.get(URL+'/') as Observable<Adoption[]>;
  }
  
  getAdoptionById(id:number):Observable<Adoption> {
    return this.http.get(URL + '/'+id) as Observable<Adoption>;
  }
  
  createAdoption( Adoption:Adoption): Observable<Adoption>{
    return this.http.post(URL, Adoption) as Observable<Adoption>;
  }
  
  updateAdoption(id: number, Adoption: Adoption):Observable<Adoption> {
    return this.http.put(URL +'/'+id,Adoption) as Observable<Adoption>;
  }
  
  saveAdoptionWithReason(id: number, rejectionReason: String):Observable<Adoption>{

    return this.http.post(URL+'/save/'+id, rejectionReason ) as Observable<Adoption>;
  }
  deleteAdoption(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
  }

  approveAdoption(id: number): Observable<Adoption>{
    return this.http.post(URL+'/approve/'+id,'') as Observable<Adoption>;
  }

  rejectAdoption(id: number, rejectionReason:string): Observable<Adoption>{
    return this.http.post(URL + '/reject/' + id,  rejectionReason) as Observable<Adoption>;
  }

}
