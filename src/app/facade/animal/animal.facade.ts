import {Injectable} from "@angular/core";
import {AnimalService} from "../../infrastructure/http/animal/animal.service";
import {MatDialog} from "@angular/material/dialog";
import {Animal} from "../../domain/animal/animal";
import {SuccessDialogComponent} from "../../application/success-dialog/success-dialog.component";
import {WarningComponent} from "../../application/warning/warning.component";
import {AnimalRequestModel} from "../../application/models/animal/AnimalRequest.model";

@Injectable({
  providedIn: 'root'
})
export class AnimalFacade {
  constructor(private animalService: AnimalService,
              private dialog: MatDialog) {
  }

  async getAnimals(): Promise<Animal[]> {
    let animals!: Animal[];
    await this.animalService.getAnimals().then(
      (result) => {
        animals = result.data;
      }
    );
    return animals;
  }

  async addAnimal(animalRequest: AnimalRequestModel): Promise<any> {
    await this.animalService.add(animalRequest).then(
      (r) => {
        console.log(r.data);
      }
    ).catch(
      (err) => this.dialog.open(WarningComponent)
    );
  }

  async deleteAnimal(id: string) {
    await this.animalService.delete(id).then(
      (result) => {
        this.dialog.open(SuccessDialogComponent)
      }).catch((e) => this.dialog.open(WarningComponent));
  }
}
