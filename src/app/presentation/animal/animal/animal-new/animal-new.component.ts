import {Component, OnInit} from '@angular/core';
import {AnimalFacade} from "../../../../facade/animal/animal.facade";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AnimalRequestModel} from "../../../../application/models/animal/AnimalRequest.model";

@Component({
  selector: 'app-animal-new',
  templateUrl: './animal-new.component.html',
  styleUrls: ['./animal-new.component.css']
})
export class AnimalNewComponent implements OnInit {
  animalNewForm!: FormGroup;

  constructor(private animalFacade: AnimalFacade,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildFormGroup();
  }

  buildFormGroup() {
    this.animalNewForm = this.formBuilder.group({
      name: [""]
    });
  }

  async add() {
    let request = new AnimalRequestModel(
      this.animalNewForm.get('name')?.value
    );
    await this.animalFacade.addAnimal(request);
  }
}
