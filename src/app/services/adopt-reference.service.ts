import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdoptReference } from '../model/adoptReference';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:8080/api/adopt-references';

@Injectable({
  providedIn: 'root'
})
export class AdoptReferenceService {

  constructor(private http: HttpClient) { }

  getAllAdoptReferences(): Observable<AdoptReference[]> {
    return this.http.get(URL+'/') as Observable<AdoptReference[]>;
  }
  
  getAdoptReferenceById(id:number):Observable<AdoptReference> {
    return this.http.get(URL + '/'+id) as Observable<AdoptReference>;
  }
  
  createAdoptReference( AdoptReference:AdoptReference): Observable<AdoptReference>{
    return this.http.post(URL, AdoptReference) as Observable<AdoptReference>;
  }
  
  updateAdoptReference(AdoptReference: AdoptReference):Observable<AdoptReference> {
    return this.http.put(URL + '/'+AdoptReference.id,AdoptReference) as Observable<AdoptReference>;
  }
  
  deleteAdoptReference(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
  }
  
}
