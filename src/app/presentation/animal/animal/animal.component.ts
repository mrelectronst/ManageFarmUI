import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AnimalNewComponent} from "./animal-new/animal-new.component";
import {AnimalListComponent} from "./animal-list/animal-list.component";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  dialogRef!: MatDialogRef<AnimalNewComponent>;

  @ViewChild(AnimalListComponent) animalListComponent!: AnimalListComponent;

  constructor(private dialog: MatDialog) {
  }

  routeNewDialog() {
    this.dialogRef = this.dialog.open(AnimalNewComponent);
    this.dialogRef.afterClosed().subscribe(result => {
      this.animalListComponent.refreshAnimals().then(r => console.log(r));
    });
  }
}
