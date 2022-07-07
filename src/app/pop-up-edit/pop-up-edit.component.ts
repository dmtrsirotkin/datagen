import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  DataService,
  IterGenBool,
  IterGenNum, IterGenString,
  PRandGenBool,
  PRandGenNum, PRandGenString,
  RandGenNum, RandGenString
} from "../shared(service)/data.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PropertyGeneration} from  "../shared(service)/data.service"
import {Parser} from "@angular/compiler";

@Component({
  selector: 'app-pop-up-edit',
  templateUrl: './pop-up-edit.component.html',
  styleUrls: ['./pop-up-edit.component.scss']
})
export class PopUpEditComponent implements OnInit {

  Submit!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: PropertyGeneration, private builder: FormBuilder,private dataService: DataService) {
  }

  ngOnInit(): void {
    this.Submit = this.builder.group({
      name: [this.data.name, Validators.required],
      type: [this.data.type, Validators.required],
      pattern: [this.data.pattern, Validators.required],
      genType: [this.data.gentype, Validators.required],
      speed: ['', Validators.required],
      rangeFrom: ['', Validators.required],
      rangeTo: ['', Validators.required],
      step: ['', Validators.required],
      initialValue: ['', Validators.required],
      mu: ['', Validators.required],
      sig: ['', Validators.required],
      probabilityFrom: ['', Validators.required],
      probabilityTo: ['', Validators.required],
    })
  }

  onEdit(){
    switch (this.Submit.value.genType) {
      case 'IterGenNum':
        let elem1 : IterGenNum = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          gentype:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          range: [this.Submit.value.rangeFrom, this.Submit.value.rangeTo],
          step: this.Submit.value.step,
          initialValue: this.Submit.value.initialValue
        }
        this.data = elem1;
        break
      case 'RandGenNum':
        let elem2 : RandGenNum = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          gentype:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          range: [this.Submit.value.rangeFrom, this.Submit.value.rangeTo]
        }
        this.data = elem2;
        break
      case 'PRandGenNum':
        let elem3 : PRandGenNum = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          gentype:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          mu:this.Submit.value.mu,
          sig:this.Submit.value.sig
        }
        this.data = elem3;
        break
      case 'IterGenBool':
        let elem4 : IterGenBool = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          gentype:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          initialValue: this.Submit.value.initialValue
        }
        this.data = elem4;
        break
      case 'PRandGenBool':
        let elem5 : PRandGenBool = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          gentype:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          probability: [this.Submit.value.probabilityFrom,this.Submit.value.probabilityTo]
        }
        this.data = elem5;
        break
      case 'IterGenString':
        let elem6 : IterGenString = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          gentype:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          range: [this.Submit.value.rangeFrom, this.Submit.value.rangeTo],
          step: this.Submit.value.step,
          initialValue: this.Submit.value.initialValue
        }
        this.data = elem6;
        break
      case 'RandGenString':
        let elem7 : RandGenString = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          gentype:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          range: [this.Submit.value.rangeFrom, this.Submit.value.rangeTo]
        }
        this.data = elem7;
        break
      case 'PRandGenString':
        let elem8 : PRandGenString = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          gentype:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          range: [this.Submit.value.rangeFrom, this.Submit.value.rangeTo],
          probability: [this.Submit.value.probabilityFrom,this.Submit.value.probabilityTo]
        }
        this.data = elem8;
        break
    }
  }
}
