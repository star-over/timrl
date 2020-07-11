import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeysGridComponent } from './grid/keys-grid/keys-grid.component';
import { KeysGridItemComponent } from './grid/keys-grid-item/keys-grid-item.component';
import { KeysGridArrowComponent } from './grid/keys-grid-arrow/keys-grid-arrow.component';
import { HandComponent } from './hand/hand/hand.component';
import { HandItemComponent } from './hand/hand-item/hand-item.component';
import { ScrollTextComponent } from './scroll-text/scroll-text.component';
import { TimrlWidgetComponent } from './timrl-widget/timrl-widget.component';



import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { UserProfileComponent } from './user-profile/user-profile.component';

const firebaseConfig = {
  apiKey: "AIzaSyDZD7a7rMlX-wCHX2i9Ii8Q2DDiQ3yNoTo",
  authDomain: "timrl-fb.firebaseapp.com",
  databaseURL: "https://timrl-fb.firebaseio.com",
  projectId: "timrl-fb",
  storageBucket: "timrl-fb.appspot.com",
  messagingSenderId: "504421620119",
  appId: "1:504421620119:web:be21b3fada075ff3a08cd2",
  measurementId: "G-D9GNSYYYEP"
};

@NgModule({
  declarations: [
    AppComponent,
    KeysGridComponent,
    KeysGridItemComponent,
    KeysGridArrowComponent,
    HandComponent,
    HandItemComponent,
    ScrollTextComponent,
    TimrlWidgetComponent,
    UserProfileComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
