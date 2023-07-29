import {Injectable} from '@angular/core';
import {AppConfiguration} from "read-appsettings-json";

@Injectable({
  providedIn: 'root'
})
export class BaseAnimalService {
  protected baseApiUrl: string = AppConfiguration.Setting().farmApiBaseUrl;

  constructor() {
  }
}
