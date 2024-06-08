import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet';

const URL: string = 'http://localhost:8080/api/pets';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http:HttpClient) { }

  getAllPets(): Observable<Pet[]> {
    return this.http.get(URL+'/') as Observable<Pet[]>;
  }
  
  getPetById(id:number):Observable<Pet> {
    return this.http.get(URL + '/'+id) as Observable<Pet>;
  }
  
  createPet( Pet:Pet): Observable<Pet>{
    return this.http.post(URL, Pet) as Observable<Pet>;
  }
  
  updatePet(Pet: Pet):Observable<Pet> {
    return this.http.put(URL + '/'+Pet.id,Pet) as Observable<Pet>;
  }
  
  deletePet(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
  }
  
}
