import { Component, OnInit } from '@angular/core';
import { Neighborhood } from '../../shared/neighborhood.model';
import { NeighborhoodService } from '../../shared/neighborhood.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  neighborhoods: Neighborhood[] = [];

  constructor(public neighborhoodService: NeighborhoodService) { }
  
  ngOnInit(): void {
    this.neighborhoodService.getAll().subscribe(
      neighborhoods => this.neighborhoods = neighborhoods,
      error => alert('Erro ao carregar a lista')
    )
  }



  /*
  getNeighborhoods(){
    this.neighborhoodService.getAll().subscribe(data => {
        this.neighborhoodsList = data.content;
        console.log(this.neighborhoodsList);
    });
  }
  */

}