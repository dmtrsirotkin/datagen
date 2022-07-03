import { Component, OnInit } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { ViewChild } from '@angular/core'

export interface PropertyGeneration {
  name: string;
  type: string;
  pattern: string;
  gentype: string;
  probability: number[];
  step: number;
}

const ELEMENT_DATA: PropertyGeneration[] = [
  {name: 'property1', type:'string' , pattern:'123{{ads}}' ,
    gentype:'Gen1' , probability:[50, 50] , step: 10},
  {name: 'property2', type:'number' , pattern:'{{25.2}}' ,
    gentype:'Gen1' , probability:[10, 90] , step: 5},
  {name: 'property3', type:'string' , pattern:'dasd{{ads}}' ,
    gentype:'Gen1' , probability:[60, 40] , step: 10},
  {name: 'property4', type:'number' , pattern:'{{2.2}}' ,
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

  UpData(){
    let elem :PropertyGeneration
    let index :number
    index = 2
    elem = ELEMENT_DATA[index-1]
    ELEMENT_DATA[index-1] = ELEMENT_DATA[index]
    ELEMENT_DATA[index] = elem
    console.log(ELEMENT_DATA)
    this.dataSource = ELEMENT_DATA
  }

  DownData(){
    let elem1 :PropertyGeneration
    let index :number
    index = 2
    elem1 = ELEMENT_DATA[index+1]
    ELEMENT_DATA[index+1] = ELEMENT_DATA[index]
    ELEMENT_DATA[index] = elem1
    console.log(ELEMENT_DATA)
    this.dataSource = ELEMENT_DATA
  }

  EditData(){
  }

  DeleteData(){
    let index:number = 2
    ELEMENT_DATA.splice(index, 1)
    this.dataSource = ELEMENT_DATA
  }
  constructor() { }

  ngOnInit(): void {
  }

}
