import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { Credencial } from '../../model/credencial';
import { LoginProvider } from '../../providers/login-provider';
import { TabsPage } from '../tabs/tabs';
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';

@Component({
  selector: 'page-login-email',
  templateUrl: 'login-email.html'
})
export class LoginEmailPage {
  credencial:Credencial;

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public loginProvider: LoginProvider,
      public loadingCtrl: LoadingController,
      public menuCtrl: MenuController) {
      this.initialize();
    }

  private initialize(){
    this.credencial = new Credencial();
  }

  ionViewDidEnter(){
    	this.menuCtrl.enable(false);
    	this.menuCtrl.swipeEnable(false);
  	}

	ionViewDidLoad() {
	    this.loginProvider.loginSucessoEventEmitter.subscribe(
	      	user => {
	        	this.menuCtrl.enable(true);
	        	this.menuCtrl.swipeEnable(true);
	        	this.navCtrl.setRoot(TabsPage)
	      	}
	    );
	    this.loginProvider.loginFalhaEventEmitter.subscribe(
	      error => console.log(error)
	    )
	}

  loginComCredencial(){
    	this.loginProvider.loginComCredencial(this.credencial);
      this.loadingCtrl.create({
        content: 'Por favor aguarde...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
  	}

    recuperarSenha(){
      this.navCtrl.push(EsqueciSenhaPage)
    }
}
