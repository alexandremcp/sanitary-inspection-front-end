import { Component, OnInit } from '@angular/core';
import { Neighborhood } from '../../shared/neighborhood.model';
import { NeighborhoodService } from '../../shared/neighborhood.service';

@Component({
  selector: 'app-neighborhood-list',
  templateUrl: './neighborhood-list.component.html',
  styleUrls: ['./neighborhood-list.component.css']
})
export class NeighborhoodListComponent implements OnInit {
  
  //listaBairros: Neighborhood[];
  neighborhoods: Neighborhood[] = [];
  
  constructor(public neighborhoodService: NeighborhoodService) { }

  ngOnInit(): void {
    this.neighborhoodService.getAll().subscribe(
      neighborhoods => this.neighborhoods = neighborhoods,
      error => alert('Erro ao carregar a lista')
    )
  }

  deleteNeighborhood(neighborhood) {
    const mustDelete = confirm('Deseja reamente excluir este item? ');
    if (mustDelete) {
      this.neighborhoodService.delete(neighborhood.id).subscribe(
        () => this.neighborhoods = this.neighborhoods.filter(element => element != neighborhood),
        () => alert("Erro ao tentar excluir!")
      )
    }
  }


  /*
  getAll(){
    this.neighborhoodService.getAll().subscribe(data => {
      this.listaBairros = data.content;
      console.log(this.listaBairros);
    });
  }
  */

}
