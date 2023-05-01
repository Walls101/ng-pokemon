import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/cards/card/card.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { Page4Component } from './components/pages/page4/page4.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'show-cards', component: CardComponent },
  {path: 'page4', component: Page4Component}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//testing repository