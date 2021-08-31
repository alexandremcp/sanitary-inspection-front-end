import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { Neighborhood } from './neighborhood.model';
import { NeighborhoodsModule } from '../neighborhoods/neighborhoods.module';
import { ResponsePageable } from './responsePageable';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodService {

  // Inicio - Micheli
  //apiUrl = 'http://localhost:8080/neighborhoods'; //Alterado para funcionar com proxy, videio da Loiane em: https://www.youtube.com/watch?v=D9oFe6rHjpY
  apiUrl = '/api/neighborhoods';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }) 
  };
  // Fim - Micheli

 //private apiPath: string = "api/neighborhoods"

  //constructor(private http: HttpClient) { }   //ESTE ERA O CONTRUTOR ORIGINAL
  constructor(private httpClient: HttpClient) { }   //CONSTRUTOR GERADO PELA MICHELE


  /*  TESTE
  public getAll(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl);
  }
  */



  getAll(): Observable<Neighborhood[]> {
    return this.httpClient.get(this.apiUrl).pipe(
      catchError(this.handleError),
      map(this.jsonDataToNeighborhoods)
    )
  }




  getById(id: number): Observable<Neighborhood> {
    const url = `${this.apiUrl}/${id}`;

    return this.httpClient.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToNeighborhood)
    )
  }

  create(neighborhood: Neighborhood): Observable<Neighborhood> {
    return this.httpClient.post(this.apiUrl, neighborhood).pipe(
      catchError(this.handleError),
      map(this.jsonDataToNeighborhood)
    )  
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }

  update(neighborhood: Neighborhood): Observable<Neighborhood> {
    const url = `${this.apiUrl}/${neighborhood.id}`;

    return this.httpClient.put(url, neighborhood).pipe(
      catchError(this.handleError),
      map(() => neighborhood)
    )
  }



  //PRIVATE METHODS

  private jsonDataToNeighborhoods(jsonData: any[]): Neighborhood[] {
    const neighborhoods: Neighborhood[] = [];
    jsonData.forEach(element => neighborhoods.push(element as Neighborhood));
    return neighborhoods;
  }

  private jsonDataToNeighborhood(jsonData: any): Neighborhood {
    return jsonData as Neighborhood;
  }

  private handleError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
    
  }


}
