import {Injectable} from "@angular/core";

export interface PropertyGeneration {
  name: string;
  type: string;
  pattern: string;
  gentype: string;
  probability: number[];
  step: number;
  id: number;
}


@Injectable({providedIn: 'root'})
  export class DataService{

  public ELEMENT_DATA: PropertyGeneration[] = [
    {name: 'property1', type:'string' , pattern:'123{{ads}}', id: 1,
      gentype:'Gen1' , probability:[50, 50] , step: 10},
    {name: 'property2', type:'number' , pattern:'{{25.2}}', id: 2,
      gentype:'Gen1' , probability:[10, 90] , step: 5},
    {name: 'property3', type:'string' , pattern:'dasd{{ads}}', id: 3,
      gentype:'Gen1' , probability:[60, 40] , step: 10},
    {name: 'property4', type:'number' , pattern:'{{2.2}}', id: 4,
      gentype:'Gen1' , probability:[10, 90] , step: 5}
  ];

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
