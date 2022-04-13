import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminServiceService } from '../adminService/admin-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthAdminInterceptor implements HttpInterceptor {

  constructor(private adminServiceService: AdminServiceService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler){
    if(request.headers.get('noauth')){
      return next.handle(request.clone());
  }else{
      const clonedreq = request.clone({
          headers:request.headers.set("Authorization","Bearer "+ this.adminServiceService.getAdminToken())
      })
      return next.handle(clonedreq).pipe(
          tap(
              event =>{},
              err=>{
                  if(err.error.auth == false){
                      this.router.navigateByUrl("/admin");
                  }
              }
          )
      )
  }
  }
}
