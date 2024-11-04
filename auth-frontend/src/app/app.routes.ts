import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomepageComponent} from './homepage/homepage.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomepageComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
