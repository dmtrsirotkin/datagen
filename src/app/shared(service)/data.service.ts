import {Injectable} from "@angular/core";

export interface PropertyGeneration {
  name: string;
  type: string;
  pattern: string;
  genType: string;
  speed: number;
  id: number;
}

export interface IterGenNum extends PropertyGeneration{
  range: number[];
  step: number;
  initialValue: number;
}

export interface RandGenNum extends PropertyGeneration{
  range: number[];
}

export interface PRandGenNum extends PropertyGeneration{
  mu:number;
  sig:number;
}

export interface IterGenBool extends PropertyGeneration{
  initialValue: boolean;
}

export interface PRandGenBool extends PropertyGeneration{
  probability: number[];
}

export interface IterGenString extends PropertyGeneration{
  range: string[];
  step: number;
  initialValue: boolean;
}


export interface RandGenString extends PropertyGeneration{
  range: string[];
}


export interface PRandGenString extends PropertyGeneration{
  range: string[];
  probability: number[];
}

@Injectable({providedIn: 'root'})
  export class DataService{

  public ELEMENT_DATA: any[] = []

  UpData(element:PropertyGeneration){
    let elem :PropertyGeneration
    let index :number = element.id -1
    if (index > 0)
    {
      elem = this.ELEMENT_DATA[index - 1]
      this.ELEMENT_DATA[index - 1] = this.ELEMENT_DATA[index]
      this.ELEMENT_DATA[index] = elem
      this.ELEMENT_DATA[index-1].id -=1
      this.ELEMENT_DATA[index].id +=1
      console.log(index)
      console.log(this.ELEMENT_DATA)
    }
  }

  DownData(element:PropertyGeneration){
    let elem1 :PropertyGeneration
    let index :number = element.id -1
    if (index < this.ELEMENT_DATA.length-1) {
      elem1 = this.ELEMENT_DATA[index + 1]
      this.ELEMENT_DATA[index + 1] = this.ELEMENT_DATA[index]
      this.ELEMENT_DATA[index] = elem1
      this.ELEMENT_DATA[index+1].id +=1
      this.ELEMENT_DATA[index].id -=1
      console.log(index)
      console.log(this.ELEMENT_DATA.length)
    }
  }

  AddData(element:PropertyGeneration){
    this.ELEMENT_DATA.push(element)
    console.log(element)
  }

  DeleteData(element:PropertyGeneration){
    let index:number = element.id -1
    this.ELEMENT_DATA.splice(index, 1)
    let newId:number = 1;
    for(let data of this.ELEMENT_DATA){
      data.id = newId;
      newId++;
    }
  }
}
