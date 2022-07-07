import { Component, OnInit } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { ViewChild } from '@angular/core'
import {DataService} from "../shared(service)/data.service";
import {PropertyGeneration} from  "../shared(service)/data.service"
import {MatDialog} from "@angular/material/dialog";
import {PopUpAddComponent} from "../pop-up-add/pop-up-add.component";
import {PopUpEditComponent} from "../pop-up-edit/pop-up-edit.component";


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor(public dataService: DataService,private dialogAdd: MatDialog) { }

  displayedColumns: string[] = ['name', 'type', 'pattern', 'gentype',
    'speed', 'slider', 'edit', 'delete'];


  @ViewChild(MatTable) table!: MatTable<PropertyGeneration>;

  UpData(element:PropertyGeneration){
    this.dataService.UpData(element)
    this.table.renderRows()
  }

  DownData(element:PropertyGeneration){
    this.dataService.DownData(element)
    this.table.renderRows()
  }

  EditData(element:any){
    this.dialogAdd.open(PopUpEditComponent,{data:element}).afterClosed().subscribe(result => {this.table.renderRows()});
  }

  AddData(){
    this.dialogAdd.open(PopUpAddComponent).afterClosed().subscribe(result => {this.table.renderRows()});
  }

  DeleteData(element:PropertyGeneration){
    this.dataService.DeleteData(element)
    this.table.renderRows()
  }

  ngOnInit(): void {
  }

}
