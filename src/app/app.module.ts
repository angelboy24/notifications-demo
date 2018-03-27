import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessagingService } from './messaging.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule ,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    MessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
