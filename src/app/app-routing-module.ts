import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeTabComponent } from './components/home-tab/home-tab.component';
import { ServiceTabComponent } from './components/service-tab/service-tab.component';

const routes: Routes = [
   { path: 'home', component: HomeTabComponent },
   { path: 'service', component: ServiceTabComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }