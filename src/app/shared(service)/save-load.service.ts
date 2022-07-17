import { Injectable } from '@angular/core';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class SaveLoadService {


  load(data:any){
    this.dataService.ELEMENT_DATA = JSON.parse(data.content)
  }

  save(dat:any){
    let data:string = JSON.stringify(dat)
    let fileName:string = "settings" + '.json'
    const file = new Blob([data], { type: "text/plain" })
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
    link.remove();
  }

  saveCsv(dat:any){
    let data1:string = JSON.stringify(dat)
    let fileName:string = "dat" + '.csv'
    const file = new Blob([data1], { type: "text/plain" })
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
    link.remove();
  }

  saveJson(dat:any){
    console.log('In progress')
  }

  constructor(private dataService: DataService) {
  }
}
