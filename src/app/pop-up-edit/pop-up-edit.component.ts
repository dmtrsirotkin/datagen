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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private builder: FormBuilder,private dataService: DataService) {
  }

  ngOnInit(): void {
    console.log(this.data)
    this.Submit = this.builder.group({
      name: [this.data.name, Validators.required],
      type: [this.data.type, Validators.required],
      pattern: [this.data.pattern, Validators.required],
      genType: [this.data.genType, Validators.required],
      speed: [this.data.speed, Validators.required],
      range: [this.data.range,Validators.required],
      rangeFrom: [(this.data.range ==null) ? '':this.data.range[0], Validators.required],
      rangeTo: [(this.data.range ==null) ? '':this.data.range[1], Validators.required],
      step: [this.data.step, Validators.required],
      initialValue: [this.data.initialValue, Validators.required],
      mu: [this.data.mu, Validators.required],
      sig: [this.data.sig, Validators.required],
      probability: [this.data.probability, Validators.required],
    })
  }

  onEdit(){
    console.log(this.Submit.value)
    switch (this.Submit.value.genType) {
      case 'IterGenNum':
        let elem1 : IterGenNum = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.data.id,
          range: [this.Submit.value.rangeFrom, this.Submit.value.rangeTo],
          step: this.Submit.value.step,
          initialValue: this.Submit.value.initialValue
        }
        this.dataService.ELEMENT_DATA[elem1.id-1] = elem1;
        break
      case 'RandGenNum':
        let elem2 : RandGenNum = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.data.id,
          range: [this.Submit.value.rangeFrom, this.Submit.value.rangeTo]
        }
        this.dataService.ELEMENT_DATA[elem2.id-1] = elem2;
        break
      case 'PRandGenNum':
        let elem3 : PRandGenNum = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.data.id,
          mu:this.Submit.value.mu,
          sig:this.Submit.value.sig
        }
        this.dataService.ELEMENT_DATA[elem3.id-1] = elem3;
        break
      case 'IterGenBool':
        let elem4 : IterGenBool = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.data.id,
          initialValue: this.Submit.value.initialValue == 'true' ? true: false
        }
        this.dataService.ELEMENT_DATA[elem4.id-1] = elem4;
        break
      case 'PRandGenBool':
        let elem5 : PRandGenBool = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.data.id,
          probability: this.Submit.value.probability
        }
        this.dataService.ELEMENT_DATA[elem5.id-1] = elem5;
        break
      case 'IterGenString':
        let elem6 : IterGenString = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.data.id,
          range: this.Submit.value.range.toString().split(','),
          step: this.Submit.value.step,
          initialValue: this.Submit.value.initialValue
        }
        this.dataService.ELEMENT_DATA[elem6.id-1] = elem6;
        break
      case 'RandGenString':
        let elem7 : RandGenString = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.data.id,
          range: this.Submit.value.range.toString().split(',')
        }
        this.dataService.ELEMENT_DATA[elem7.id-1] = elem7;
        break
      case 'PRandGenString':
        let elem8 : PRandGenString = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.data.id,
          range: this.Submit.value.range.toString().split(','),
          probability: this.Submit.value.probability
        }
        this.dataService.ELEMENT_DATA[elem8.id-1] = elem8;
        break
    }
  }
}
