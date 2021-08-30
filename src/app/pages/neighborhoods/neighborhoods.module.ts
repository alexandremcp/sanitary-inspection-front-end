import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeighborhoodsRoutingModule } from './neighborhoods-routing.module';
import { NeighborhoodListComponent } from './neighborhood-list/neighborhood-list.component';
import { NeighborhoodFormComponent } from './neighborhood-form/neighborhood-form.component';


@NgModule({
  declarations: [NeighborhoodListComponent, NeighborhoodFormComponent],
  imports: [
    CommonModule,
    NeighborhoodsRoutingModule
  ]
})
export class NeighborhoodsModule{}
