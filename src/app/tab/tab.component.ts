import { Component, OnInit } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { ViewChild } from '@angular/core'
import {PropertyGeneration} from "../dto/property-generation";


const ELEMENT_DATA: PropertyGeneration[] = [
  {name: 'property1', type:'string' , pattern:'123{{ads}}', id: 1,
    gentype:'Gen1' , probability:[50, 50] , step: 10},
  {name: 'property2', type:'number' , pattern:'{{25.2}}', id: 2,
    gentype:'Gen1' , probability:[10, 90] , step: 5},
  {name: 'property3', type:'string' , pattern:'dasd{{ads}}', id: 3,
    gentype:'Gen1' , probability:[60, 40] , step: 10},
  {name: 'property4', type:'number' , pattern:'{{2.2}}', id: 4,
    gentype:'Gen1' , probability:[10, 90] , step: 5}
];

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'pattern', 'gentype',
    'probability', 'step', 'slider', 'edit', 'delete'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<PropertyGeneration>;

  UpData(element:PropertyGeneration){
    let elem :PropertyGeneration
    let index :number = element.id -1
    if (index > 0)
    {
      elem = ELEMENT_DATA[index - 1]
      ELEMENT_DATA[index - 1] = ELEMENT_DATA[index]
      ELEMENT_DATA[index] = elem
      ELEMENT_DATA[index-1].id -=1
      ELEMENT_DATA[index].id +=1
      console.log(index)
    }
    this.dataSource = ELEMENT_DATA
    this.table.renderRows()
  }

  DownData(element:PropertyGeneration){
    let elem1 :PropertyGeneration
    let index :number = element.id -1
    if (index < ELEMENT_DATA.length-1) {
      elem1 = ELEMENT_DATA[index + 1]
      ELEMENT_DATA[index + 1] = ELEMENT_DATA[index]
      ELEMENT_DATA[index] = elem1
      ELEMENT_DATA[index+1].id +=1
      ELEMENT_DATA[index].id -=1
      console.log(index)
      console.log(ELEMENT_DATA.length)
    }
    this.dataSource = ELEMENT_DATA
    this.table.renderRows()
  }

  EditData(element:PropertyGeneration){
    this.table.renderRows()
  }

  AddData(){

  }

  DeleteData(element:PropertyGeneration){
    let index:number = element.id -1
    ELEMENT_DATA.splice(index, 1)
    this.dataSource = ELEMENT_DATA
    this.table.renderRows()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
