import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SobrePage } from '../sobre/sobre';

@Component({
  selector: 'page-dai',
  templateUrl: 'dai.html'
})
export class DaiPage {
  constructor(public navCtrl: NavController, 
  public navParams: NavParams) {}

 	slides = [
    {
      title: "Aplicativo DAI disponível",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/1.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/2.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
    image: "assets/img/3.jpg",
    }
  	];

    iniciarPagina() {
    		this.navCtrl.setRoot(SobrePage);
  	}
}

