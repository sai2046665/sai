import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../adminService/admin-service.service';
//import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  loading:boolean=false;
  submitted:boolean=false;
  returnUrl: string;
  errorMessage: string;




  constructor(private formBulder:FormBuilder,private route: ActivatedRoute,private router: Router, private adminservice:AdminServiceService) { }

  ngOnInit(): void {
    this.adminLoginForm = this.formBulder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  get frm(){
    return this.adminLoginForm.controls;
  }

  onAdminLogin(){
    this.submitted = true;

    if(this.adminLoginForm.invalid){
      return;
    }
  
    this.loading = true;   


    this.adminservice.adminLogIn(this.frm.username.value,this.frm.password.value).subscribe(
      res=>{
         this.adminservice.setToken(res['admintoken']);
         this.router.navigateByUrl('/adminDashboard');
         this.loading=false;
       },
       err=>{
        this.errorMessage = err.error.message;
       setTimeout(() => {
        this.errorMessage=null;
       }, 5000);
        this.loading = false;

       }
     )


  }
}
