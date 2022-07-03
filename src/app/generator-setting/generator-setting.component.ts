import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {GenerationPrefab} from "../app.component";
import {PopupGenComponent} from "../popup-gen/popup-gen.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-generator-setting',
  templateUrl: './generator-setting.component.html',
  styleUrls: ['./generator-setting.component.scss']
})

export class GeneratorSettingComponent implements OnInit {
  @Input() generations: GenerationPrefab[] = []
  @Output() onDelete = new EventEmitter<number>()
  @Output() onEdit = new EventEmitter<number>()
  @Output() onChangePositionDown = new EventEmitter<number>()
  @Output() onChangePositionUp = new EventEmitter<number>()
  @Output() onAdd = new EventEmitter()
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  OnDelete(id : number){
    // this.onDelete.emit(id)
    alert('Точно удалить??')
    this.onDelete.emit(id)
  }

  OnEdit(id : number){
    this.onEdit.emit(id)
  }

  OnChangePositionDown(id : number){
    this.onChangePositionDown.emit(id)
  }

  OnChangePositionUp(id : number){
    this.onChangePositionUp.emit(id)
  }

  OnAdd(id: number){
    // this.onAdd.emit();
    this.generations.push({id: id-1,name : "name",type: "type",pattern: "pattern",genType: "genType",probability: "probability",step: "step"})
    alert('dsadasd')
  }
  onCum(id: number){
    alert(this.generations.push())
  }
  OnpopUp(){
    this.dialog.open(PopupGenComponent)
  }
}
