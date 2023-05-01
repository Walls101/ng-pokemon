import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/cards/card/card.component';
import { Page4Component } from './components/pages/page4/page4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule,
    Page4Component,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Page4Component,
    CardComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
