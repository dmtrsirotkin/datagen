import {Component, OnInit} from '@angular/core';
import {ReadMode } from "ngx-file-helpers";
import {SaveLoadService} from "../shared(service)/save-load.service";
@Component({
  selector: 'app-data-generation',
  templateUrl: './data-generation.component.html',
  styleUrls: ['./data-generation.component.scss']
})
export class DataGenerationComponent implements OnInit {
  public readMode = ReadMode.text;

  constructor(public SaveLoadService:SaveLoadService) { }

  ngOnInit(): void {
  }

}
