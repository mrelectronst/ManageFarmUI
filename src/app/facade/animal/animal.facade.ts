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

  async getAnimal(id: string): Promise<Animal> {
    let animal!: Animal;
    await this.animalService.getAnimal(id).then(
      (result) => {
        animal = result.data;
      }
    );
    return animal;
  }

  async addAnimal(animalRequest: AnimalRequestModel): Promise<any> {
    try {
      const r = await this.animalService.add(animalRequest);
      this.dialog.open(SuccessDialogComponent);
    } catch (err: any) {
      if (err.status == 404) {
        this.dialog.open(WarningComponent, {
          data: 'Same Name Found'
        });
      }
    }
  }

  async deleteAnimal(id: string) {
    await this.animalService.delete(id).then(
      (result) => {
        this.dialog.open(SuccessDialogComponent)
      }).catch((e) => this.dialog.open(WarningComponent));
  }
}
