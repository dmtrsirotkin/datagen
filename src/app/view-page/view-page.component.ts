import { Component, OnInit } from '@angular/core';
import {SaveLoadService} from "../shared(service)/save-load.service";
import {DataService} from "../shared(service)/data.service";

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {

  constructor(public SaveLoadService:SaveLoadService, public DataService:DataService) { }
  ngOnInit(): void {
  }

}
