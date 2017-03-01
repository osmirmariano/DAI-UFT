import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController, AlertController  } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { Credencial } from '../../model/credencial';
import { LoginProvider } from '../../providers/login-provider';
import { TabsPage } from '../tabs/tabs';
import { LoginEmailPage } from '../login-email/login-email';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
	credencial:Credencial;

  	constructor(
  		public navCtrl: NavController,
        public loginProvider: LoginProvider,
        public menuCtrl: MenuController,
		public loadingCtrl: LoadingController,
		public alertCtrl: AlertController) {
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

	loginComFacebook(){
	    this.loginProvider.loginComFacebook();
	}

  	loginComCredencial(){
    	this.loginProvider.loginComCredencial(this.credencial);
		this.loadingCtrl.create({
			content: 'Por favor, aguarde...',
			duration: 3000,
			dismissOnPageChange: true
		}).present();
  	}

	loginComGoogle(){
	    this.loginProvider.loginComGoogle();
	}
	
	sair(){
	    this.loginProvider.sair();
	}

	doRegister(){
	    this.navCtrl.push(RegistrarPage);
	}

	loginComEmail(){
		this.navCtrl.push(LoginEmailPage);
	}
}
