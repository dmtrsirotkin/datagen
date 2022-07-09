import { Injectable } from '@angular/core';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private dataService: DataService) {
  }
}
