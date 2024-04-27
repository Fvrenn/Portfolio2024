import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { NavComponent } from './components/sections/nav/nav.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { DetailProjetComponent } from './components/modules/detail-projet/detail-projet.component';

const routes: Routes = [
  {path: 'nav-bar', component: NavComponent},
  {path: '', component: HeroComponent},
  { path: 'detail-projet/:nomProjet', component: DetailProjetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
