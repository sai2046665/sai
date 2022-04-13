import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading= false;
  submitted= false;
  returnUrl: string;
  serverErrorMessage : string;

  constructor(private formBuilder: FormBuilder,private route : ActivatedRoute, private router : Router ,private userService:UserService) { 
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username :['',Validators.required],
      password :['',Validators.required],
    })
  }

  //for finding the error in html
get frm(){
  return this.loginForm.controls;
}

onSubmit(){
  this.submitted = true;

  if(this.loginForm.invalid){
    return;
  }

  this.loading = true;

  console.log(this.frm.username);
  console.log(this.frm.password);

  console.log("hi");

  this.userService.login(this.frm.username.value,this.frm.password.value).subscribe(
    res=>{
      this.userService.setToken(res['token']);
      this.router.navigateByUrl('/userprofile');
      this.loading = false;
    },err =>{
      this.serverErrorMessage = err.error.message;
      this.loading = false;
    }
  )



}

}
