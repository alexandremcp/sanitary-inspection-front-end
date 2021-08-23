import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { Neighborhood } from './neighborhood.model';
import { NeighborhoodsModule } from '../neighborhoods/neighborhoods.module';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodService {

  private apiPath: string = "api/neighborhoods"

  constructor(private http: HttpClient) { }


  getAll(): Observable<Neighborhood[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToNeighborhoods)
    )
  }

  getById(id: number): Observable<Neighborhood> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToNeighborhood)
    )
  }

  create(neighborhood: Neighborhood): Observable<Neighborhood> {
    return this.http.post(this.apiPath, neighborhood).pipe(
      map(this.jsonDataToNeighborhood)
    )  
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }

  update(neighborhood: Neighborhood): Observable<Neighborhood> {
    const url = `${this.apiPath}/${neighborhood.id}`;

    return this.http.put(url, neighborhood).pipe(
      catchError(this.handleError),
      map(() => neighborhood)
    )
  }




  //PRIVATE METHODS

  private jsonDataToNeighborhoods(json: any[]): Neighborhood[] {
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
