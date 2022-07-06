import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../shared(service)/data.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PropertyGeneration} from  "../shared(service)/data.service"

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
      name: ['', Validators.required],
      type: ['', Validators.required],
      pattern: ['', Validators.required],
      genType: ['', Validators.required],
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
    this.data.name = this.Submit.value.name
    this.data.type = this.Submit.value.type
    this.data.pattern = this.Submit.value.pattern
    this.data.gentype = this.Submit.value.genType

  }
}
