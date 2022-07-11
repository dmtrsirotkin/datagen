import { Injectable } from '@angular/core';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class SaveLoadService {


  load(data:any){
    this.dataService.ELEMENT_DATA = JSON.parse(data.content)
  }

  save(){
    let data:string = JSON.stringify(this.dataService.ELEMENT_DATA)
    let fileName:string = "NAMEFROMPOPUP" + '.json'
    const file = new Blob([data], { type: "text/plain" })
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
    link.remove();
  }


  constructor(private dataService: DataService) {
  }
}
