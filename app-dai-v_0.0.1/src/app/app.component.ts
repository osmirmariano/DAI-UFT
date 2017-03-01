import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ProgramasPage } from '../pages/programas/programas';
import { ConveniosPage } from '../pages/convenios/convenios';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SlideHomePage } from '../pages/slide-home/slide-home';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { SobreDaiPage } from '../pages/sobre-dai/sobre-dai';

import firebase from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  /*rootPage: any = SlideHomePage;*/
  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Programas', component: ProgramasPage },
      { title: 'Convênios', component: ConveniosPage },
      { title: 'Como funciona', component: TutorialPage},
      { title: 'Configurações', component: ConfiguracaoPage},
      { title: 'Sobre', component: SobreDaiPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.platform.ready().then(() => {
        this.hideSplashScreen();
    });
  }

  hideSplashScreen() {
    if (Splashscreen) {
        setTimeout(() => {
            Splashscreen.hide();
        }, 100);
    }
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  /*Verificar ainda*/
  obtendoUsuario(){
		if (firebase.auth().currentUser) {
			return firebase.auth().currentUser.displayName;
		} 
	}
}
