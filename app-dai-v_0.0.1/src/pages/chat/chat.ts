import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import * as io from 'socket.io-client';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  messsages: any = [];
  socketHost: string = "http://localhost/3000";
  socket: any;
  chat: any;
  username: string;
  zone: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.socket = io.connect(this.socketHost);
    this.zone = new NgZone({enableLongStackTrace: false});
    this.socket.on("chat message", (msg) => {
      this.zone.run(() => {
        this.messsages.push(msg);
        this.content.scrollToBottom();
      });
    });
  }

  chatSend(v){
    let data = {
      message: v.chatText,
      username: this.username
    }
    this.socket.emit('new message', data);
    this.chat = '';
  }
}
