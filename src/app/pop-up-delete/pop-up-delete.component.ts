import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DataService} from "../shared(service)/data.service";

@Component({
  selector: 'app-pop-up-delete',
  templateUrl: './pop-up-delete.component.html',
  styleUrls: ['./pop-up-delete.component.scss']
})
export class PopUpDeleteComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  text = "Точно удалить " + this.data.name + "?";

  onConfirm(){
    this.dataService.DeleteData(this.data);
  }
}
