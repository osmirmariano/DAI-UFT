import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html'
})

export class ConfiguracaoPage {

    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams) {}

    ionViewDidLoad() {
      console.log('ionViewDidLoad ConfiguracaoPage');
    }
}
