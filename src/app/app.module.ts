import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalListComponent } from './presentation/animal/animal-list/animal-list.component';
import { AnimalDetailComponent } from './presentation/animal/animal-detail/animal-detail.component';
import { AnimalUpdateComponent } from './presentation/animal/animal-update/animal-update.component';
import { WarningComponent } from './application/warning/warning.component';
import { WaitingComponent } from './application/waiting/waiting.component';
import { SuccessDialogComponent } from './application/success-dialog/success-dialog.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
