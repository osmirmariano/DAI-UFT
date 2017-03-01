import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  iniciarPagina() {
    		this.navCtrl.setRoot(TabsPage)
  	}
}
