import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ImageHeroComponent } from './components/image-hero/image-hero.component';
import { SubtextComponent } from './components/subtext/subtext.component';
import { HomeTabComponent } from './components/home-tab/home-tab.component';
import { ServiceTabComponent } from './components/service-tab/service-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabsComponent,
    ImageHeroComponent,
    SubtextComponent,
    HomeTabComponent,
    ServiceTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
