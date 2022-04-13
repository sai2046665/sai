import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import  {HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminUserProfileComponent } from './admin-user-profile/admin-user-profile.component';
import { AboutComponent } from './about/about.component';


import { AuthGuard } from './auth/auth.guard';
import { AdminAuthGuard } from './authadmin/admin-auth.guard'

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminLoginComponent},
  {path:'about', component:AboutComponent},
  {path:'userprofile', component:UserprofileComponent,canActivate:[AuthGuard]},
  {path:'userRegister', component:UserRegistrationComponent,canActivate:[AdminAuthGuard]},
  {path:'adminUserProfile/:id', component:AdminUserProfileComponent,canActivate:[AdminAuthGuard]}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
