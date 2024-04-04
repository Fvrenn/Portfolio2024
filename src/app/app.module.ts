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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    InfiniteScrollingTextComponent
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
