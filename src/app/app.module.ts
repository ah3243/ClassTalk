import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './routing/app.routing';
import { TeacherComponent } from './teacher/teacher.component';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

var apiKeys = require('./apiConfig.json');

export const myFirebaseConfig = {
    apiKey: apiKeys.apiKey,
    authDomain: apiKeys.authDomain,
    databaseURL: apiKeys.databaseURL,
    storageBucket: apiKeys.storageBucket,
    messagingSenderId: apiKeys.messagingSenderId
};

const myFirebaseAuth = {
  provider: AuthProviders.Google ,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TeacherComponent,
    SpeechToTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuth)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
