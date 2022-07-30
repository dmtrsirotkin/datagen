import { Injectable } from '@angular/core';
import {
  DataService,
  IterGenBool,
  IterGenNum,
  IterGenString,
  PRandGenBool,
  PRandGenNum, PRandGenString, PropertyGeneration,
  RandGenNum, RandGenString
} from "./data.service";
// @ts-ignore
import { randomNormal } from 'random-normal'
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})

export class GeneratorService {

  constructor(private dataService: DataService) {
  }
  public numgen: number = 0;
  public Generation(num_gen: number){
    this.dataService.DataForExport = []
    for (let i = 0; i < this.dataService.ELEMENT_DATA.length; i++){
      console.log("сгенерирована запись:" + i)
      switch (this.dataService.ELEMENT_DATA[i].genType) {
        case 'IterGenNum':
          this.dataService.DataForExport.push(this.GenResult(this.dataService.ELEMENT_DATA[i].pattern,
            this.IterGenNum(this.dataService.ELEMENT_DATA[i],num_gen), this.dataService.ELEMENT_DATA[i].type));
          break
        case 'RandGenNum':
          this.dataService.DataForExport.push(this.GenResult(this.dataService.ELEMENT_DATA[i].pattern,
            this.RandGenNum(this.dataService.ELEMENT_DATA[i],num_gen), this.dataService.ELEMENT_DATA[i].type));
          break
        case 'PRandGenNum':
          this.dataService.DataForExport.push(this.GenResult(this.dataService.ELEMENT_DATA[i].pattern,
            this.PRandGenNum(this.dataService.ELEMENT_DATA[i],num_gen), this.dataService.ELEMENT_DATA[i].type));
          break
        case 'IterGenBool':
          this.dataService.DataForExport.push(this.GenResult(this.dataService.ELEMENT_DATA[i].pattern,
            this.IterGenBool(this.dataService.ELEMENT_DATA[i],num_gen), this.dataService.ELEMENT_DATA[i].type));
          break
        case 'PRandGenBool':
          this.dataService.DataForExport.push(this.GenResult(this.dataService.ELEMENT_DATA[i].pattern,
            this.PRandGenBool(this.dataService.ELEMENT_DATA[i],num_gen), this.dataService.ELEMENT_DATA[i].type));
          break
        case 'IterGenString':
          this.dataService.DataForExport.push(this.GenResult(this.dataService.ELEMENT_DATA[i].pattern,
            this.IterGenString(this.dataService.ELEMENT_DATA[i],num_gen), this.dataService.ELEMENT_DATA[i].type));
          break
        case 'RandGenString':
          this.dataService.DataForExport.push(this.GenResult(this.dataService.ELEMENT_DATA[i].pattern,
            this.RandGenString(this.dataService.ELEMENT_DATA[i],num_gen), this.dataService.ELEMENT_DATA[i].type));
          break
        case 'PRandGenString':
          this.dataService.DataForExport.push(this.GenResult(this.dataService.ELEMENT_DATA[i].pattern,
            this.PRandGenString(this.dataService.ELEMENT_DATA[i],num_gen), this.dataService.ELEMENT_DATA[i].type));
          break
        case 'UUID':
          this.dataService.DataForExport.push(this.GenResult(this.dataService.ELEMENT_DATA[i].pattern,
            this.GenUUID(this.dataService.ELEMENT_DATA[i],num_gen), this.dataService.ELEMENT_DATA[i].type));
          break
        case 'RepeatConst':
          this.dataService.DataForExport.push(this.GenResult(this.dataService.ELEMENT_DATA[i].pattern,
            this.RepeatConst(this.dataService.ELEMENT_DATA[i],num_gen), this.dataService.ELEMENT_DATA[i].type));
          break
      }
    }
    console.log(this.dataService.DataForExport)
  }

  IterGenNum(obj: IterGenNum, num_gen:number){
    let initialValue = obj.initialValue*1
    let num_list = []
    for (let j = 0; j < obj.speed; j++) {
      num_list.push(initialValue)
    }
    let min_num = (obj.range ==null) ? 0:obj.range[0]*1;
    let max_num = (obj.range ==null) ? 0:obj.range[1]*1;
    for(let i = obj.speed; i < num_gen;i++){
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
    for(let i = 0; i < num_gen; i++){
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
    for(let i = 0; i < num_gen; i++){
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
    for (let j = 0; j < obj.speed; j++) {
      bool_list.push(initialValue)
    }
    for(let i = obj.speed; i < num_gen; i++){
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
    let string_list = []
    let initialValue = obj.initialValue
    for (let j = 0; j < obj.speed; j++) {
      string_list.push(initialValue)
    }
    let index = obj.range.indexOf(initialValue)
    for(let i = obj.speed; i < num_gen; i++){
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

  PRandGenString(obj: PRandGenString, num_gen: number) {
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

  RepeatConst(obj: PropertyGeneration, num_gen: number){
    let const_list:any[] = []
    for(let i = 0; i < num_gen; i++){
      const_list.push(obj.pattern)
    }
    return const_list
  }

  GenUUID(obj: PropertyGeneration, num_gen: number){
    let uuid_list:any[] = []
    let uuid: string = ''
    for(let i = 0; i < num_gen; i++){
      if (i % obj.speed == 0) {
        uuid = uuidv4()
      }
      uuid_list.push(uuid)
    }
    return uuid_list
  }

  GenResult(pattern:string, data:any[], type:string){
    let res:any[] = [], str:any, str1:any, patterns:string[], num:number, before:number, after:number, numbers:string[],
      datt:string, numbers1:string[]
    if (pattern.match('{{')||pattern.match('}}')) {
      pattern = pattern.replace(/{{/g, '!@!@{{')
      pattern = pattern.replace(/}}/g, '}}!@!@')
      patterns = pattern.split('!@!@')
      for (let dat of data) {
        str = ''
        for (let elems of patterns) {
          if (elems != '') {
            if (elems.match(/{{.+}}/)) {
              elems = elems.replace('{{', '')
              elems = elems.replace('}}', '')
              num = parseFloat(elems)
              numbers1 = elems.split('.')
              if (num == NaN) {
                num = 0
              }
              if (num - Math.round(num) == 0) {
                before = num
                after = 0
              } else {
                before = Math.floor(num)
                after = parseInt(numbers1[1])
              }
              numbers = dat.toString().split('.')
              if (numbers.length == 1) {
                numbers[1] = '0'
              }
              datt = ''
              for (let i = 0; i < numbers.length; i++) {
                if (i === 0) {
                  if (numbers[i].length <= before && before != 0) {
                    datt = datt.concat(numbers[i].padStart(before, '0'))
                  } else if (before == 0) {
                    datt = datt.concat(numbers[i])
                  } else {
                    datt = datt.concat(numbers[i].slice(numbers[i].length - before))
                  }
                } else {
                  datt = datt.concat('.')
                  if (numbers[i].length <= after && after !== 0) {
                    datt = datt.concat(numbers[i].padEnd(after, '0'))
                  } else if (after == 0) {
                    datt = datt.concat(numbers[i])
                  } else {
                    datt = datt.concat(numbers[i].slice(0, after))
                  }
                }
              }
              if (type == 'string') {
                str = str.concat(datt)
              } else if (type == 'number' || type == 'double') {
                str = parseFloat(datt)
              }
            }
            else if (elems.match(/{{}}/)) {
              if (type == 'string') {
                str1 = dat.toString()
                str = str.concat(str1)
              } else {
                str = dat
              }

            }
            else {
              console.log(str)
              str = str.concat(elems)
            }
          }
        }
        res.push(str)
      }
    }
    else{
      res = data
    }

    return res
  }

}



