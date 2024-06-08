import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from '../model/breed';

const URL: string = 'http://localhost:8080/api/breeds';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(private http: HttpClient) { }

  getAllBreeds(): Observable<Breed[]> {
    return this.http.get(URL+'/') as Observable<Breed[]>;
  }
  
  getBreedById(id:number):Observable<Breed> {
    return this.http.get(URL + '/'+id) as Observable<Breed>;
  }
  
  createBreed( Breed:Breed): Observable<Breed>{
    return this.http.post(URL, Breed) as Observable<Breed>;
  }
  
  updateBreed(Breed: Breed):Observable<Breed> {
    return this.http.put(URL + '/'+Breed.id,Breed) as Observable<Breed>;
  }
  
  deleteBreed(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
  }
}
