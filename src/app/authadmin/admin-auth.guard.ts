import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from '../adminService/admin-service.service';
import { ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private adminService: AdminServiceService, private router: Router){}

canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.adminService.isLoggedIn()){
        this.router.navigateByUrl('/admin');
        this.adminService.deleteToken();
        return false;
      }
    return true;

  }
  
}
