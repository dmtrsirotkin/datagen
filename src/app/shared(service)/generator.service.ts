import { Injectable } from '@angular/core';
import {
  DataService,
  IterGenBool,
  IterGenNum,
  IterGenString,
  PRandGenBool,
  PRandGenNum, PRandGenString,
  RandGenNum, RandGenString
} from "./data.service";
// @ts-ignore
import { randomNormal } from 'random-normal'

@Injectable({
  providedIn: 'root'
})

export class GeneratorService {

  constructor(private dataService: DataService) {
  }

  public Generation(num_gen: number){
    this.dataService.DataForExport = []
    for (let i = 0; i < this.dataService.ELEMENT_DATA.length; i++){
      console.log("сгенерирована запись:" + i)
      switch (this.dataService.ELEMENT_DATA[i].genType) {
        case 'IterGenNum':
          this.dataService.DataForExport.push(this.IterGenNum(this.dataService.ELEMENT_DATA[i],num_gen));
          break
        case 'RandGenNum':
          this.dataService.DataForExport.push(this.RandGenNum(this.dataService.ELEMENT_DATA[i],num_gen));
          break
        case 'PRandGenNum':
          this.dataService.DataForExport.push(this.PRandGenNum(this.dataService.ELEMENT_DATA[i],num_gen));
          break
        case 'IterGenBool':
          this.dataService.DataForExport.push(this.IterGenBool(this.dataService.ELEMENT_DATA[i],num_gen));
          break
        case 'PRandGenBool':
          this.dataService.DataForExport.push(this.PRandGenBool(this.dataService.ELEMENT_DATA[i],num_gen));
          break
        case 'IterGenString':
          this.dataService.DataForExport.push(this.IterGenString(this.dataService.ELEMENT_DATA[i],num_gen));
          break
        case 'RandGenString':
          this.dataService.DataForExport.push(this.RandGenString(this.dataService.ELEMENT_DATA[i],num_gen));
          break
        case 'PRandGenString':
          this.dataService.DataForExport.push(this.PRandGenString(this.dataService.ELEMENT_DATA[i],num_gen));
          break
      }
    }
    console.log(this.dataService.DataForExport)
  }

  IterGenNum(obj: IterGenNum, num_gen:number){
    let initialValue = obj.initialValue*1
    let num_list = [initialValue]
    let min_num = (obj.range ==null) ? 0:obj.range[0]*1;
    let max_num = (obj.range ==null) ? 0:obj.range[1]*1;
    for(let i = 1; i < num_gen;i++){
      if(i % obj.speed*1 == 0) {
        if (initialValue*1 + obj.step*1 > max_num*1) {
          initialValue = min_num;
        } else if (initialValue*1 + obj.step*1 < min_num*1) {
          initialValue = max_num;
        } else {
          initialValue += obj.step*1;
        }
      }
      num_list.push(initialValue)
    }
    return num_list
  }
  RandGenNum(obj: RandGenNum, num_gen:number) {
    let num_list = [];
    let max_num = (obj.range ==null) ? 0:obj.range[0]*1;
    let min_num = (obj.range ==null) ? 0:obj.range[1]*1;
    let num=0
    for(let i = 1; i <= num_gen; i++){
      if (i %  obj.speed*1 == 0) {
        if(obj.type == "double"){
          num = Math.random() * (max_num - min_num) + min_num
        }
        else if (obj.type == "number"){
          num = Math.round(Math.random() * (max_num - min_num) + min_num)
        }
      }
      num_list.push(num)
    }
    return num_list
  }
  PRandGenNum(obj: PRandGenNum, num_gen:number) {
    let num_list = [];
    let num = 0
    let randomNormal = require('random-normal');
    for(let i = 1; i < num_gen; i++){
      if (i %  obj.speed*1 == 0){
        num = randomNormal({mean: obj.mu*1, dev: obj.sig*1})
      }
      num_list.push(num)
    }
    return num_list
  }
  IterGenBool(obj : IterGenBool, num_gen:number) {
    let bool_list = []
    let initialValue = obj.initialValue;
    bool_list.push(initialValue)
    for(let i = 0; i < num_gen; i++){
      if (i %  obj.speed == 0) {
        initialValue = !initialValue
      }
      bool_list.push(initialValue)
    }
    return bool_list
  }

  PRandGenBool(obj : PRandGenBool, num_gen:number) {
    let bool_list = [];
    let initialValue;
    for(let i = 0; i < num_gen; i++){
      if (i %  obj.speed == 0){
        initialValue = (Math.random()*100 < obj.probability)
      }
      bool_list.push(initialValue)
    }
    return bool_list
  }
  IterGenString(obj : IterGenString, num_gen:number) {
    let string_list = [obj.initialValue]
    let initialValue = obj.initialValue
    let index = obj.range.indexOf(initialValue)
    for(let i = 1; i < num_gen; i++){
      if(i % obj.speed == 0){
        if(index + obj.step*1 >  obj.range.length-1){
          index = 0
        }else if(index + obj.step*1 < 0){
          index = obj.range.length-1
        }else{
          index += obj.step*1
        }
      }
      string_list.push(obj.range[index])
    }
    return string_list
  }
  RandGenString(obj:RandGenString, num_gen:number) {
    let string_list = []
    let length = obj.range.length
    let str = ''
    for(let i = 0; i < num_gen; i++){
      if(i % obj.speed == 0){
        str = obj.range[Math.round(Math.random() * (length-1))]
      }
      string_list.push(str);
    }
    return string_list
  }
  PRandGenString(obj: PRandGenString,num_gen: number) {
    let string_list = []
    let str = ''
    let index = 0;
    let probabilitySum = 0;
    for(let i = 0;i < obj.probability.length;i++){
      probabilitySum += obj.probability[i]*1
    }
    for(let i = 0; i < num_gen; i++){
      if(i % obj.speed == 0){
        let randomNumber = Math.random() * (probabilitySum)
        console.log('randomnumber = ' + randomNumber)
        let sumProb = 0
        for (let j = 0;j<obj.probability.length;j++){
          if(randomNumber > sumProb && randomNumber < sumProb+obj.probability[j]*1){
            index = j
            break;
          }
          else{
            sumProb += obj.probability[j]*1
          }
        }
      }
      string_list.push(obj.range[index])
    }
    return string_list
  }
}


