import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/cards/card/card.component';
import { Page4Component } from './components/pages/page4/page4.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { GamepageComponent } from './components/pages/gamepage/gamepage.component';
import { ErrorpageComponent } from './components/pages/errorpage/errorpage.component';
import { GameSetupComponent } from './game-setup/game-setup.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'show-cards', component: CardComponent },
  {path: 'page4', component: Page4Component},


  {path: 'game', component: GamepageComponent},
  {path: 'game-setup', component: GameSetupComponent},
  {path: '**', component: ErrorpageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//testing repository