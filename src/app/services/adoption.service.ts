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
  
  updateAdoption(Adoption: Adoption):Observable<Adoption> {
    return this.http.put(URL + '/'+Adoption.id,Adoption) as Observable<Adoption>;
  }
  
  deleteAdoption(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
  }


}
