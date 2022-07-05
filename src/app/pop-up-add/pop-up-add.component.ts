import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../shared(service)/data.service";
import {PropertyGeneration} from  "../shared(service)/data.service"

@Component({
  selector: 'app-pop-up-add',
  templateUrl: './pop-up-add.component.html',
  styleUrls: ['./pop-up-add.component.scss']
})
export class PopUpAddComponent implements OnInit {

  Submit!: FormGroup;
  constructor(private builder: FormBuilder,private dataService: DataService) {
  }

  ngOnInit(): void {
    this.Submit = this.builder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      pattern: ['', Validators.required],
      genType: ['', Validators.required],
      probability: ['', Validators.required],
      step: ['', Validators.required]
    })
  }

  onSave()
  {
    let elem : PropertyGeneration = {
      name: this.Submit.value.name,
      type:this.Submit.value.type,
      pattern:this.Submit.value.pattern,
      gentype:this.Submit.value.genType,
      probability:this.Submit.value.probability,
      step: this.Submit.value.step,
      id: this.dataService.ELEMENT_DATA.length+1}

    this.dataService.AddData(elem)
  }

}
