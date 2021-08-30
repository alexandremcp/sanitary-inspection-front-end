import { Component, OnInit } from '@angular/core';
import { Neighborhood } from '../../shared/neighborhood.model';
import { NeighborhoodService } from '../../shared/neighborhood.service';

@Component({
  selector: 'app-neighborhood-list',
  templateUrl: './neighborhood-list.component.html',
  styleUrls: ['./neighborhood-list.component.css']
})
export class NeighborhoodListComponent implements OnInit {
  
  listaBairros: Neighborhood[];
  
  constructor(
    //public neighborhoodService: NeighborhoodService
    public neighborhoodService: NeighborhoodService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.neighborhoodService.getAll().subscribe(data => {
      this.listaBairros = data.content;
      console.log(this.listaBairros);
    });
  }

}
