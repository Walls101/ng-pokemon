import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { CardComponent } from './components/cards/card/card.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { environment } from 'src/environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { Page4Component } from './components/pages/page4/page4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list'
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { GameSetupComponent } from './game-setup/game-setup.component'
import {MatSelectModule} from '@angular/material/select'
import { GamepageComponent } from './components/pages/gamepage/gamepage.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
  ],
  tosUrl: 'https://www.google.com',
  privacyPolicyUrl: 'https://www.google.com',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
  declarations: [
    AppComponent,
    Page4Component,
    CardComponent,
    LoginPageComponent,
    GameSetupComponent,
    GamepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AngularFireAuthModule,
    provideAuth(()=> getAuth())

  ],
  exports: [
    MatCardModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }