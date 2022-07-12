import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared(service)/data.service";
@Component({
  selector: 'app-view-tab',
  templateUrl: './view-tab.component.html',
  styleUrls: ['./view-tab.component.scss']
})
export class ViewTabComponent implements OnInit {


  constructor(public dataService:DataService) { }
  displayedColumns: dataService.data.

  ngOnInit(): void {
  }

}
