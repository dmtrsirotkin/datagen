import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
@Injectable({
  providedIn: 'root'
})
export class SaveLoadService {

  load(data:any){
    this.dataService.ELEMENT_DATA = JSON.parse(data.content)
  }

  save(dat:any, name:string){
    let data:string = JSON.stringify(dat)
    let fileName:string = name + '.json'
    const file = new Blob([data], { type: "text/plain" })
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
    link.remove();
  }

  saveCsv(dat:any){
  }

  saveJson(dat:any) {
    let obj:any = {}
    let obj1:any[] = []
    for (let i = 0; i < dat[0].length; i++) {
      let j = 0
      for (const key of this.dataService.ELEMENT_DATA) {
        obj[key.name] = dat[j][i]
        console.log(dat[j][i])
        j++
      }
      obj1.push(obj)
    }
    this.save(obj1,'GeneratedData')
  }

  constructor(private dataService: DataService) {
  }
}
