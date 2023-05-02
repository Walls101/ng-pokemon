import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/cards/card/card.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { GamepageComponent } from './components/pages/gamepage/gamepage.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'show-cards', component: CardComponent },


  {path: 'game', component: GamepageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//testing repository