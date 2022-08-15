import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared(service)/data.service";
@Component({
  selector: 'app-view-tab',
  templateUrl: './view-tab.component.html',
  styleUrls: ['./view-tab.component.scss']
})
export class ViewTabComponent implements OnInit {
  displayedColumns:string[] = []
  numbers = Array.from({ length: this.DataService.DataForExport[0].length }, (v, k) => k+1)
  value:any = Object.values(this.DataService.DataForExport)
  valuess = this.value.splice(0,0,this.numbers)
  values:any = this.transpose(this.value)
  constructor(public DataService:DataService) { }
  ngOnInit(): void {
    this.displayedColumns.push('№')
    for (let item of this.DataService.ELEMENT_DATA){
      this.displayedColumns.push(item.name)
    }
    console.log(this.value)
  }
  transpose(matrix:any) {
    return matrix[0].map((col:any, c:any) => matrix.map((row:any, r:any) => matrix[r][c]));
  }
}
