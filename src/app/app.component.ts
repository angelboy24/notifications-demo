import { Component, OnInit } from '@angular/core';
import { MessagingService } from './messaging.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
export interface Message {
  message: string;
  title: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  message;
  messages: AngularFirestoreCollection<Message>;

  constructor(private msgService: MessagingService, private afs: AngularFirestore) {}

  ngOnInit() {
    this.messages = this.afs.collection('messages');
    console.log(this.messages);
    this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.message = this.msgService.currentMessage;
  }
}
