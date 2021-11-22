import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {
  dataSearch: Array<{nombre: number,label: string}> = [];

  constructor() { }

  addDataSearched(wordsText: any[]) {
    console.log('wordsText',wordsText);
    wordsText.forEach(list => {
      const indexData = this.dataSearch.findIndex((listData) => listData.label === list.text);
      if(indexData !== -1){
        this.dataSearch[indexData].nombre = this.dataSearch[indexData].nombre + 1;
      }
      else{
        this.dataSearch.push({nombre: 1, label: list.text});
      }
    });
    console.log('datasearch : ',this.dataSearch);
  }
}