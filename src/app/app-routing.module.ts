import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/cards/card/card.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { GamepageComponent } from './components/pages/gamepage/gamepage.component';
import { ErrorpageComponent } from './components/pages/errorpage/errorpage.component';
import { GameSetupComponent } from './game-setup/game-setup.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'show-cards', component: CardComponent },


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