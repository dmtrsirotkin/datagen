import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared(service)/data.service";
@Component({
  selector: 'app-view-tab',
  templateUrl: './view-tab.component.html',
  styleUrls: ['./view-tab.component.scss']
})
export class ViewTabComponent implements OnInit {
  displayedColumns:string[] = []
  arra = Array.from({ length: this.DataService.DataForExport[0].length }, (v, k) => k+1)
  value:any = Object.values(this.DataService.DataForExport)
  values = this.value.splice(0,0,this.arra)
  constructor(public DataService:DataService) { }
  ngOnInit(): void {
    this.displayedColumns.push('№')
    for (let item of this.DataService.ELEMENT_DATA){
      this.displayedColumns.push(item.name)
    }
  }

}
