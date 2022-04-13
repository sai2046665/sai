import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userDetails;
  username;
  data;
  date;
  id;
  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      // res=>{

      //   this.userDetails= res['user'];
      // },
      // err=>{

      // }
      res=>{
        var userProfileDetails;
        userProfileDetails= res['userProfile'];
        this.username = res['username'];
        this.id = res['id'];
        this.data = userProfileDetails.toString().split(',');
      },
      err=>{
        console.log(err['message']);

      }
    )

    var today = new Date();
    this.date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();//today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'  '+
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }

}
