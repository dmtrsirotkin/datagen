import {Component, OnInit} from '@angular/core';
import {ReadMode } from "ngx-file-helpers";
import {SaveLoadService} from "../shared(service)/save-load.service";
import {DataService} from "../shared(service)/data.service";
import {GeneratorService} from "../shared(service)/generator.service";
import { NgModule } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-data-generation',
  templateUrl: './data-generation.component.html',
  styleUrls: ['./data-generation.component.scss']
})
export class DataGenerationComponent implements OnInit {
  public readMode = ReadMode.text;

  constructor(public SaveLoadService:SaveLoadService, public DataService:DataService, public GeneratorService:GeneratorService, private builder: FormBuilder) { }
  public Submit!: FormGroup;

  ngOnInit(): void {
    this.Submit = this.builder.group({
      num_gen: [this.GeneratorService.numgen, Validators.required]
    })
  }
  saveNum(){
    this.GeneratorService.numgen = this.Submit.value.num_gen
    this.GeneratorService.Generation(this.Submit.value.num_gen)
  }
}
