import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PesquisarProvider {
  items: any;
  
  constructor(public http: Http) {
    
    this.items = [
        {title: 'Ciência Sem Fronteiras', imageTitulo: 'assets/img/programa1.png'},
        {title: 'PEC-G', imageTitulo: 'assets/img/programa2.png'},
        {title: 'Indiomas Sem Fronteiras', imageTitulo: 'assets/img/programa3.png'},
        {title: 'Santander Universidades', imageTitulo: 'assets/img/programa4.png'},
        {title: 'EBW++', imageTitulo: 'assets/img/programa5.png'}
    ]
  }

  filterItems(searchTerm){
    return this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });     
  }
}
