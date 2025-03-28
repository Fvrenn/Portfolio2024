import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { NavComponent } from './components/sections/nav/nav.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { DetailProjetComponent } from './components/modules/detail-projet/detail-projet.component';
import { PageProjetComponent } from './components/modules/page-projet/page-projet.component';
import { PageProjetAutreComponent } from './components/modules/page-projet-autre/page-projet-autre.component';
import { VeilleComponent } from './components/modules/veille/veille.component';

const routes: Routes = [
  {path: 'nav-bar', component: NavComponent},
  {path: '', component: HeroComponent},
  { path: 'detail-projet/:nomProjet', component: DetailProjetComponent },
  { path: 'page-projet', component: PageProjetComponent },
  { path: 'page-projet-autre', component: PageProjetAutreComponent },
  { path: 'veille', component: VeilleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
