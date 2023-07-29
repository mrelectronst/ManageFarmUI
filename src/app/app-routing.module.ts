import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AnimalComponent} from "./presentation/animal/animal/animal.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal'
  },
  {
    path: 'animal',
    loadComponent: () => AnimalComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
