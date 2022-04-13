import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserService } from './shared/user.service';
import { AdminServiceService } from './adminService/admin-service.service';

import { AuthGuard } from './auth/auth.guard';
import { AdminAuthGuard } from './authadmin/admin-auth.guard'
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthAdminInterceptor } from './authadmin/auth-admin.interceptor';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminUserProfileComponent } from './admin-user-profile/admin-user-profile.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminLoginComponent,
    HeaderComponent,
    FooterComponent,
    UserprofileComponent,
    UserRegistrationComponent,
    SidenavComponent,
    AdminUserProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},{provide:HTTP_INTERCEPTORS,useClass:AuthAdminInterceptor,multi:true},AuthGuard,UserService,AuthInterceptor,AuthAdminInterceptor,AdminServiceService,AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
