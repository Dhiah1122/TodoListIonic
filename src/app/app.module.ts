import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
export const firebaseConfig = {
  apiKey: "AIzaSyB-XMiKeIorJxZApttuCV_XjNtNbN4NuSo",
    authDomain: "todolist-c51fd.firebaseapp.com",
    databaseURL: "https://todolist-c51fd-default-rtdb.firebaseio.com/",
    projectId: "todolist-c51fd",
    storageBucket: "todolist-c51fd.appspot.com",
    messagingSenderId: "711545946622",
    appId: "1:711545946622:web:fad33cee4c768778b0c0af",
    measurementId: "G-0J5XVJ7BSD"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
