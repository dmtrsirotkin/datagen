import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../shared(service)/data.service";
import {PropertyGeneration, IterGenNum, IterGenString, PRandGenString, RandGenString, IterGenBool, PRandGenBool, PRandGenNum, RandGenNum} from  "../shared(service)/data.service"

@Component({
  selector: 'app-pop-up-add',
  templateUrl: './pop-up-add.component.html',
  styleUrls: ['./pop-up-add.component.scss']
})
export class PopUpAddComponent implements OnInit {

  public Submit!: FormGroup;
  constructor(private builder: FormBuilder,private dataService: DataService) {
  }

  ngOnInit(): void {
    this.Submit = this.builder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      pattern: ['', Validators.required],
      genType: ['', Validators.required],
      speed: ['', Validators.required],
      range: ['',Validators.required],
      rangeFrom: ['', Validators.required],
      rangeTo: ['', Validators.required],
      step: ['', Validators.required],
      initialValue: ['', Validators.required],
      mu: ['', Validators.required],
      sig: ['', Validators.required],
      probability: ['', Validators.required],
    })
  }

  onSave()
  {
    switch (this.Submit.value.genType) {
      case 'IterGenNum':
        let elem1 : IterGenNum = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          range: [this.Submit.value.rangeFrom, this.Submit.value.rangeTo],
          step: this.Submit.value.step,
          initialValue: this.Submit.value.initialValue
        }
        this.dataService.AddData(elem1)
        break
      case 'RandGenNum':
        let elem2 : RandGenNum = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          range: [this.Submit.value.rangeFrom, this.Submit.value.rangeTo]
        }
        this.dataService.AddData(elem2)
        break
      case 'PRandGenNum':
        let elem3 : PRandGenNum = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          mu:this.Submit.value.mu,
          sig:this.Submit.value.sig
        }
        this.dataService.AddData(elem3)
        break
      case 'IterGenBool':
        let elem4 : IterGenBool = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          initialValue: this.Submit.value.initialValue == 'true' ? true: false
        }
        this.dataService.AddData(elem4)
        break
      case 'PRandGenBool':
        let elem5 : PRandGenBool = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          probability: this.Submit.value.probability
        }
        this.dataService.AddData(elem5)
        break
      case 'IterGenString':
        let elem6 : IterGenString = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          range: this.Submit.value.range.toString().split(','),
          step: this.Submit.value.step,
          initialValue: this.Submit.value.initialValue
        }
        this.dataService.AddData(elem6)
        break
      case 'RandGenString':
        let elem7 : RandGenString = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          range: this.Submit.value.range.toString().split(',')
        }
        this.dataService.AddData(elem7)
        break
      case 'PRandGenString':
        let elem8 : PRandGenString = {
          name: this.Submit.value.name,
          type:this.Submit.value.type,
          pattern:this.Submit.value.pattern,
          genType:this.Submit.value.genType,
          speed:this.Submit.value.speed,
          id: this.dataService.ELEMENT_DATA.length+1,
          range: this.Submit.value.range.toString().split(','),
          probability: this.Submit.value.probability
        }
        this.dataService.AddData(elem8)
        break
    }
  }

}
