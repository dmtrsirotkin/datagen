import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {GenerationPrefab} from "../app.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-popup-gen',
  templateUrl: './popup-gen.component.html',
  styleUrls: ['./popup-gen.component.scss']
})
export class PopupGenComponent implements OnInit {
  @Output() onAdd = new EventEmitter<GenerationPrefab>()
  SubmitTemplate!: FormGroup;
  constructor(private templateBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.SubmitTemplate = this.templateBuilder.group({
      columnName: ['', Validators.required],
      dataType: ['', Validators.required],
      rangeFrom: ['', Validators.required],
      rangeTo: ['', Validators.required],
      columnNumber: ['', Validators.required]
    })
  }
  pukich() {
    console.log(this.SubmitTemplate.value);
  }
  public generation : GenerationPrefab = {id: 123,name : "123",type: "123",pattern: "123",genType: "123",probability: "123",step: "123"}


  OnAdd(){
    this.onAdd.emit(this.generation)
    console.log('Popup работает')
    console.log(this.generation)
  }


}
