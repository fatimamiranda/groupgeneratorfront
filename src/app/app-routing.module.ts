import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';


const routes: Routes = [
  {path: "",  redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component:HomeComponent},
  {path: "result", component: ResultComponent},
  {path: "**",  redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
