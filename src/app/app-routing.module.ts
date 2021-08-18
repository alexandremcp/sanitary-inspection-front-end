import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'companyModule', loadChildren: () => import('./pages/company/company.module').then(m => m.CompanyModule) },
];

@NgModule({
//  imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


