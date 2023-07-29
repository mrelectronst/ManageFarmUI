import {Component, Inject, OnInit} from '@angular/core';
import {AnimalFacade} from "../../../../facade/animal/animal.facade";
import {Animal} from "../../../../domain/animal/animal";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
  animal!: Animal;

  constructor(private animalFacade: AnimalFacade,
              @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  async ngOnInit() {
    await this.getAnimal();
  }

  async getAnimal() {
    this.animal = await this.animalFacade.getAnimal(this.data);
  }
}
