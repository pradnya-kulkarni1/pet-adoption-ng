import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdoptionRequest } from '../model/adoptionRequest';

const URL: string='http://localhost:8080/api/adoptionRequests';

@Injectable({
  providedIn: 'root'
})
export class AdoptionRequestService {

  constructor(private http: HttpClient) { }

  getAllAdoptionRequests(): Observable<AdoptionRequest[]>{
    return this.http.get(URL+'/') as Observable<AdoptionRequest[]>;
  }
  getAdoptionRequestById(id:number):Observable<AdoptionRequest> {
    return this.http.get(URL + '/'+id) as Observable<AdoptionRequest>;
}
getAllAdoptionForApprove():Observable<AdoptionRequest[]> {
  return this.http.get(URL + '/getadoptionsforapprove') as Observable<AdoptionRequest[]>;
}

createAdoptionRequest( adoptionRequest:AdoptionRequest): Observable<AdoptionRequest>{
    return this.http.post(URL, adoptionRequest) as Observable<AdoptionRequest>;
}

updateAdoptionRequest(adoptionRequest: AdoptionRequest):Observable<AdoptionRequest> {
    return this.http.put(URL + '/'+adoptionRequest.id,adoptionRequest) as Observable<AdoptionRequest>;
}

deleteAdoptionRequest(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
}
approveAdoptionRequest(id: number): Observable<AdoptionRequest>{
  return this.http.post(URL+'/approve/'+id,'') as Observable<AdoptionRequest>;
}
rejectAdoptionRequest(id: number, rejectionReason:string): Observable<AdoptionRequest>{
  return this.http.post(URL + '/reject/' + id,  rejectionReason) as Observable<AdoptionRequest>;
}


holdAdoption(id: number): Observable<AdoptionRequest>{
  return this.http.post(URL+'/hold/'+id,'') as Observable<AdoptionRequest>;
}
}
