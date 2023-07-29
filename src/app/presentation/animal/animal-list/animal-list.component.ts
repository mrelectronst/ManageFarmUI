import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {AnimalFacade} from "../../../facade/animal/animal.facade";
import {MatTableDataSource} from "@angular/material/table";
import {Animal} from "../../../domain/animal/animal";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animalListFormGroup!: FormGroup;
  displayedAnimalTableColumns: string[] = ['edit', 'animalId', 'animalName'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private formBuilder: FormBuilder,
              private animalFacade: AnimalFacade,
              private router: Router) {
  }

  async ngOnInit() {
    this.InitializeFormObj();
    await this.refreshOrders();
  }

  InitializeFormObj(): void {
    this.animalListFormGroup = this.formBuilder.group({
      searchAnimalTable: [""]
    });
  }

  async refreshOrders() {
    let animals = await this.animalFacade.getAnimals();
    this.dataSource = new MatTableDataSource<Animal>(animals);
    this.dataSource.sort = this.sort;
  }

  searchListInAnimalList(event: any) {
    this.dataSource.filter = event.target.value.trim();
  }

  async animaDetailPage(animalId: string) {
    this.router.navigate(['/animaldetail'], {
      queryParams: {
        animalId: animalId
      }
    }).then(r => console.log(r));
  }
}
