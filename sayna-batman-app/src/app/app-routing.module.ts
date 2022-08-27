import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EshopComponent } from './components/eshop/eshop.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'eshop', component: EshopComponent },
  { path: 'mon-compte', component: MonCompteComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
