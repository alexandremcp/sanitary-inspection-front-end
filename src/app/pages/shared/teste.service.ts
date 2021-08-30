import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Neighborhood } from './neighborhood.model';
import { ResponsePageable } from './responsePageable';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  apiUrl = 'http://localhost:8080/neighborhoods';

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ){} 


  public getTodos(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl);
  }



 






}
