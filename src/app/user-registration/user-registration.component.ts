import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,ReactiveFormsModule} from '@angular/forms';
import { ConfirmedValidator } from '../confirmValidator';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userRegForm: FormGroup;
  loading= false;
  submitted= false;
  returnUrl: string;
  serverErrorMessage : string;
  userMessage : string;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    console.log("inside init")
    this.userRegForm= this.formBuilder.group({
      name:['',Validators.required],
      username:['', Validators.required],
      password: ['',Validators.required],
      cnfpassword:['', Validators.required],
      address:['', Validators.required]
    },{
      validators: ConfirmedValidator('password','cnfpassword'),
    })
  }

  get frm(){
    return this.userRegForm.controls;
  }

  onRegistration(){
    this.submitted=true;
    if(this.userRegForm.invalid){
      return;
    }
    
    this.loading = true;

    this.userService.userRegister(this.frm.name.value,this.frm.username.value,this.frm.password.value,this.frm.address.value).subscribe(
      res=>{
        // this.userService.setToken(res['token']);
        this.userMessage = "User has been successfully registered!";
        setTimeout(() => {
          this.router.navigateByUrl('/adminDashboard');
      }, 3000);
        this.loading = false;
      },err =>{
        this.serverErrorMessage = err.error.message;
        setTimeout(() => {
          this.serverErrorMessage = null;
      }, 3000);
        this.loading = false;
      }
    )
  }


}
