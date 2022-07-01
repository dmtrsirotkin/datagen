import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {GenerationPrefab} from "../app.component";


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
  constructor() { }

  ngOnInit(): void {
  }

  OnDelete(id : number){
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

  OnAdd(){
    this.onAdd.emit();
  }
}
