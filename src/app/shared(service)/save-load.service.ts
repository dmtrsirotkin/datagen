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

  saveCsv(data:any){
    const replacer = (key: any, value: null) => value === null ? '' : value;
    let header:string[] = [];
    let dat:any[] = []
    let dat1:any[] = []
    for (const key of this.dataService.ELEMENT_DATA) {
      header.push(key.name)
    }
    dat.push(header)
    for (let j=0; j<data[0].length; j++){
      for (let i=0; i<data.length; i++){
        dat1.push(data[i][j])
      }
      dat.push(dat1)
      dat1=[]
    }
    let csv = dat.map(function(d){
      return d.join();
    }).join('\n');
    let blob = new Blob([csv], {type: 'text/csv' })
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "generatedData.csv";
    link.click();
    link.remove();
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
