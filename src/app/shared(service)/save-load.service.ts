import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import { saveAs } from 'file-saver';
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

  saveCsv(data: any) {
    const replacer = (key: any, value: null) => value === null ? '' : value;
    const header = Object.keys(data[0]);
    let csv = data.map((row: { [x: string]: any; }) => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "csv.csv");
  }

  saveJson(dat: any) {
    let JSON1 = JSON.stringify(dat);
    let fileName:string = "json" + '.json'
    let blob = new Blob([JSON1], { type: 'text/json' });
    let url= window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    link.remove();
  }

  constructor(private dataService: DataService) {
  }
}
