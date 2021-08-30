import { Component, OnInit } from '@angular/core';
import { Neighborhood } from '../../shared/neighborhood.model';
import { NeighborhoodService } from '../../shared/neighborhood.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  neighborhoodsList: Neighborhood[];

  constructor(
    public neighborhoodService: NeighborhoodService
  ) { }

  ngOnInit(): void {
    this.getNeighborhoods();
  }

  getNeighborhoods(){
    this.neighborhoodService.getAll().subscribe(data => {
        this.neighborhoodsList = data.content;
        console.log(this.neighborhoodsList);
    });
  }

}
