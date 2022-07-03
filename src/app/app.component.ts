import { Component } from '@angular/core';

export interface GenerationPrefab {
  id : number;
  name: string;
  type: string;
  pattern: string;
  genType: string;
  probability: string;
  step: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = "Datagen"

  public generations: GenerationPrefab[] = [
    {id: 1,name : "name1",type: "type",pattern: "pattern",genType: "genType",probability: "probability",step: "step"},
    {id: 2,name : "name2",type: "type",pattern: "pattern",genType: "genType",probability: "probability",step: "step"},
    {id: 3,name : "name3",type: "type",pattern: "pattern",genType: "genType",probability: "probability",step: "step"},
    {id: 4,name : "name4",type: "type",pattern: "pattern",genType: "genType",probability: "probability",step: "step"},
    {id: 5,name : "name5",type: "type",pattern: "pattern",genType: "genType",probability: "probability",step: "step"},
    {id: 6,name : "name6",type: "type",pattern: "pattern",genType: "genType",probability: "probability",step: "step"}
  ]

  AddGeneration(generation: GenerationPrefab){

    console.log("генерация добавлена")
    this.generations.push(generation);
  }

  DeleteGeneration(id: number){
    console.log("нажали делит " + id)
    this.generations = this.generations.filter(t => t.id !== id)
  }

  EditGeneration(id: number){
    console.log("нажали эдит " + id)
  }

  ChangeGenerationPositionDown(id: number){
    console.log("нажали стрелку вниз " + id)
  }

  ChangeGenerationPositionUp(id: number){
    console.log("нажали стрелку вверх " + id)
  }
}
