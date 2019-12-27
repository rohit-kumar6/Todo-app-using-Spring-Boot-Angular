import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  // Homepage
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  // redirect to welcome/name for specific name
  { path: 'welcome/:name', component: WelcomeComponent },
  // Any other path except defined ones
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
