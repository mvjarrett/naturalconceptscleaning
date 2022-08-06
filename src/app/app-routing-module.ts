import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AboutTabComponent } from './components/about-tab/about-tab.component';
import { ContactTabComponent } from './components/contact-tab/contact-tab.component';
import { HomeTabComponent } from './components/home-tab/home-tab.component';
import { ServiceTabComponent } from './components/service-tab/service-tab.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeTabComponent },
   { path: 'service', component: ServiceTabComponent },
   { path: 'about', component: AboutTabComponent },
   { path: 'contact', component: ContactTabComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }