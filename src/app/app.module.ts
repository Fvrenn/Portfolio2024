import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/sections/nav/nav.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ProjectComponent } from './components/sections/project/project.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { InfiniteScrollingTextComponent } from './components/modules/infinite-scrolling-text/infinite-scrolling-text.component';
import { AccordingComponent } from './components/modules/according/according.component';
import { BadgeComponent } from './components/modules/badge/badge.component';
import { ProjetSiteComponent } from './components/modules/projet-site/projet-site.component';
import { ProjetAutreComponent } from './components/modules/projet-autre/projet-autre.component';
import { DetailProjetComponent } from './components/modules/detail-projet/detail-projet.component';
import { ExperiencesComponent } from './components/modules/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    InfiniteScrollingTextComponent,
    AccordingComponent,
    BadgeComponent,
    ProjetSiteComponent,
    ProjetAutreComponent,
    DetailProjetComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
