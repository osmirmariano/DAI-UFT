import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SlideHomePage } from '../pages/slide-home/slide-home';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login-provider';
import { PesquisarProvider } from '../providers/pesquisar';
import { RegistrarPage } from '../pages/registrar/registrar';
import { TabsPage } from '../pages/tabs/tabs';
import { IsfPage } from '../pages/isf/isf';
import { ChatPage } from '../pages/chat/chat';
import { DaiPage } from '../pages/dai/dai';
import { ConveniosPage } from '../pages/convenios/convenios';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ProgramasPage } from '../pages/programas/programas';
import { NavegacaoPage } from '../pages/programas/programas';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { SobrePage } from '../pages/sobre/sobre';
import { LoginEmailPage } from '../pages/login-email/login-email';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';
import { SobreDaiPage } from '../pages/sobre-dai/sobre-dai';
import { ConveniosContentPage } from '../pages/convenios/convenios';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCT5QhqGe8tXBhcCwXE27VUoWyngERdJYM",
  authDomain: "appdai-beta.firebaseapp.com",
  databaseURL: "https://appdai-beta.firebaseio.com",
  storageBucket: "appdai-beta.appspot.com",
  messagingSenderId: "562100545330"
};

@NgModule({
  declarations: [
    MyApp,
    SlideHomePage,
    LoginPage,
    RegistrarPage,
    TabsPage,
    IsfPage,
    ChatPage,
    DaiPage,
    ProgramasPage,
    ConveniosPage, 
    NavegacaoPage, 
    TutorialPage,
    ConfiguracaoPage,
    SobrePage, 
    LoginEmailPage,
    EsqueciSenhaPage,
    SobreDaiPage,
    ConveniosContentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SlideHomePage,
    LoginPage,
    RegistrarPage,
    TabsPage,
    IsfPage,
    ChatPage,
    DaiPage,
    ProgramasPage,
    ConveniosPage,
    TutorialPage,
    NavegacaoPage,
    ConfiguracaoPage,
    SobrePage,
    LoginEmailPage,
    EsqueciSenhaPage,
    SobreDaiPage,
    ConveniosContentPage
  ],
  providers: [
    LoginProvider,
    PesquisarProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
