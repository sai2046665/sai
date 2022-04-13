import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../adminService/admin-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetails;
  userNameFlag: boolean = false;

  constructor(private userService:UserService, private router: Router, private adminService:AdminServiceService) { }

  ngOnInit(): void {
    // this.userService.getUserProfile().subscribe(
    //   res=>{

    //     this.userDetails= res['user'];
    //     if(this.userDetails!=null){
    //       this.userNameFlag = true;

    //     }
    //     console.log("inside header");
    //   },
    //   err=>{

    //   }
    // )
  }

  onLogout(){
    this.userService.deleteToken();
    this.userNameFlag = false;
    this.router.navigateByUrl('/login');
  }

}
