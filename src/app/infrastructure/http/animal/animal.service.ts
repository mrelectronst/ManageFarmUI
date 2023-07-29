import {Injectable} from '@angular/core';
import {BaseAnimalService} from "./base-animal.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {APIResponseModel} from "../../../application/models/APIResponse.model";
import {Animal} from "../../../domain/animal/animal";
import {AnimalRequestModel} from "../../../application/models/animal/AnimalRequest.model";
import {APIPostResponseModel} from "../../../application/models/APIPostResponse.model";
import {APIPostDataResponseModel} from "../../../application/models/APIPostDataResponseModel";

@Injectable({
  providedIn: 'root'
})
export class AnimalService extends BaseAnimalService {

  constructor(private http: HttpClient) {
    super();
  }

  async getAnimals(): Promise<any> {
    return await this.http.get<APIResponseModel<Animal[]>>(this.baseApiUrl + '/animals').toPromise();
  }

  async add(request: AnimalRequestModel): Promise<any> {
    return await this.http.post<APIPostResponseModel<APIPostDataResponseModel>>(this.baseApiUrl + '/animal', request).toPromise();
  }

  async delete(animalId: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return await this.http.delete(this.baseApiUrl + `/animal/` + animalId, httpOptions).toPromise();
  }
}
