import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AdminServiceService } from '../adminService/admin-service.service';

@Component({
  selector: 'app-admin-user-profile',
  templateUrl: './admin-user-profile.component.html',
  styleUrls: ['./admin-user-profile.component.css']
})
export class AdminUserProfileComponent implements OnInit {

  id: String;
  //userProfileDetails: string;
  data;
  username;


  constructor(private route: ActivatedRoute,private adminServiceService: AdminServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.adminServiceService.fetch(this.id).subscribe(
        res=>{
          var userProfileDetails;
          var username;
  
          userProfileDetails= res['userProfile'];
          this.username = res['username'];
          this.data = userProfileDetails.toString().split(',');
        },
        err=>{
          console.log(err['message']);
  
        }
      )
  }





 
}
