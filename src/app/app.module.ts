import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ImageHeroComponent } from './components/image-hero/image-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabsComponent,
    ImageHeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
