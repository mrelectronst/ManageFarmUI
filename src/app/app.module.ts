import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {WarningComponent} from './application/warning/warning.component';
import {WaitingComponent} from './application/waiting/waiting.component';
import {SuccessDialogComponent} from './application/success-dialog/success-dialog.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AnimalModule} from "./presentation/animal/animal/animal.module";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
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
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AnimalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
