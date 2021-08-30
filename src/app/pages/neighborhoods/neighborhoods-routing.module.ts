import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeighborhoodListComponent } from './neighborhood-list/neighborhood-list.component';
import { NeighborhoodFormComponent } from './neighborhood-form/neighborhood-form.component';

const routes: Routes = [
  { path: '', component: NeighborhoodListComponent },
  { path: 'new', component: NeighborhoodFormComponent },
  { path: ':id/edit', component: NeighborhoodFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeighborhoodsRoutingModule { } 
