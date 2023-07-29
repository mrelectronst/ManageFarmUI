import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimalComponent} from "./animal.component";
import {AnimalDetailComponent} from "./animal-detail/animal-detail.component";
import {AnimalListComponent} from "./animal-list/animal-list.component";
import {AnimalUpdateComponent} from "./animal-update/animal-update.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    AnimalComponent,
    AnimalDetailComponent,
    AnimalListComponent,
    AnimalUpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    AnimalComponent,
    AnimalDetailComponent,
    AnimalListComponent,
    AnimalUpdateComponent
  ]
})
export class AnimalModule {
}
