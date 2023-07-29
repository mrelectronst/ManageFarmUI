import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalListComponent } from './presentation/animal/animal-list/animal-list.component';
import { AnimalDetailComponent } from './presentation/animal/animal-detail/animal-detail.component';
import { AnimalUpdateComponent } from './presentation/animal/animal-update/animal-update.component';
import { WarningComponent } from './application/warning/warning.component';
import { WaitingComponent } from './application/waiting/waiting.component';
import { SuccessDialogComponent } from './application/success-dialog/success-dialog.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalDetailComponent,
    AnimalUpdateComponent,
    WarningComponent,
    WaitingComponent,
    SuccessDialogComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
