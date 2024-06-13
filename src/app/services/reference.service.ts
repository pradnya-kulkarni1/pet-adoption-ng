import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reference } from '../model/reference';

const URL: string = 'http://localhost:8080/api/references';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor(private http:HttpClient) { }

  getAllReferences(): Observable<Reference[]> {
    return this.http.get(URL+'/') as Observable<Reference[]>;
  }
  
  getReferenceById(id:number):Observable<Reference> {
    return this.http.get(URL + '/'+id) as Observable<Reference>;
  }
  
  createReference( Reference:Reference): Observable<Reference>{
    return this.http.post(URL, Reference) as Observable<Reference>;
  }
  
  updateReference(Reference: Reference):Observable<Reference> {
    return this.http.put(URL + '/'+Reference.id,Reference) as Observable<Reference>;
  }
  
  deleteReference(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
  }
  
}
