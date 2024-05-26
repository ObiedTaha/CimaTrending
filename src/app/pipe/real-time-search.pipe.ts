import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realTimeSearch'
})
export class RealTimeSearchPipe implements PipeTransform {

  transform(arr: any[], keyWord: string): any {
    return arr.filter((ele) => {
      if (ele.name) {
        return ele.name.toLowerCase().includes(keyWord.toLowerCase())
      } else {
        return ele.title.toLowerCase().includes(keyWord.toLowerCase())
      }
    })
  }

}

