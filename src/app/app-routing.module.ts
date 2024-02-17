import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ServicePageComponent } from './modules/service-page/service-page.component';

const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch: 'full'},
  {path:"service/:alias", component: ServicePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }