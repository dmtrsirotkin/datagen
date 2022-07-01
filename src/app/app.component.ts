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
    {id: 1,name : "name",type: "type",pattern: "pattern",genType: "genType",probability: "probability",step: "step"},
    {id: 2,name : "name",type: "type",pattern: "pattern",genType: "genType",probability: "probability",step: "step"}
  ]

  AddGeneration(){
    //this.generations.push()
    console.log("нажали плюсик ")
  }

  DeleteGeneration(id: number){
    console.log("нажали делит " + id)
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
