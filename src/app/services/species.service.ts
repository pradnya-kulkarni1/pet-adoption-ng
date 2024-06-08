import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Species } from '../model/species';

const URL: string = 'http://localhost:8080/api/species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {


  constructor(private http: HttpClient) { }


getAllSpeciess(): Observable<Species[]> {
  return this.http.get(URL+'/') as Observable<Species[]>;
}

getSpeciesById(id:number):Observable<Species> {
  return this.http.get(URL + '/'+id) as Observable<Species>;
}

createSpecies( Species:Species): Observable<Species>{
  return this.http.post(URL, Species) as Observable<Species>;
}

updateSpecies(Species: Species):Observable<Species> {
  return this.http.put(URL + '/'+Species.id,Species) as Observable<Species>;
}

deleteSpecies(id: number): Observable<boolean>{
  return this.http.delete(URL+"/"+id) as Observable<boolean>;
}

}
