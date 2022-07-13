import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared(service)/data.service";
@Component({
  selector: 'app-view-tab',
  templateUrl: './view-tab.component.html',
  styleUrls: ['./view-tab.component.scss']
})
export class ViewTabComponent implements OnInit {

  displayedColumns = Object.keys(this.DataService.DataForExport)
  values:any = Object.values(this.DataService.DataForExport)
  len = Array(this.values[0].length).keys()
  len1 = Array(this.displayedColumns.length).keys()
  constructor(public DataService:DataService) { }
  ngOnInit(): void {
    console.log(this.values)
  }

}
