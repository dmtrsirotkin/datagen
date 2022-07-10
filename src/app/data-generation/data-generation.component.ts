import {Component, OnInit} from '@angular/core';
import {ReadMode } from "ngx-file-helpers";
import {SaveLoadService} from "../shared(service)/save-load.service";
import {GeneratorService} from "../shared(service)/generator.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-data-generation',
  templateUrl: './data-generation.component.html',
  styleUrls: ['./data-generation.component.scss']
})
export class DataGenerationComponent implements OnInit {
  public readMode = ReadMode.text;

  constructor(public SaveLoadService:SaveLoadService, public GeneratorService: GeneratorService,private builder: FormBuilder) { }

  public Submit!: FormGroup;

  ngOnInit(): void {
    this.Submit = this.builder.group({
      num_gen: ['0', Validators.required]
    })
  }

  Generation(){
    this.GeneratorService.Generation(this.Submit.value.num_gen);
  }

}
