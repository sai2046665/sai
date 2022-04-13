import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  formData = new FormData();


  noAuthHeader = {headers: new HttpHeaders({'NoAuth':'True'})};

  constructor(private http: HttpClient) { }

  adminLogIn(username,password){
    console.log(username);
    console.log(password);
    return this.http.post(environment.apiBaseUrl + '/authenticateAdmin',{username,password}, this.noAuthHeader);
  }

  getAdminProfile(){
    return this.http.get(environment.apiBaseUrl + '/adminUserProfile');
  }

  setToken(token:string){
    localStorage.setItem('token',token);
  }

  getAdminToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    return localStorage.removeItem('token');
  }

  deleteUser(_id:string){
    return this.http.delete(environment.apiBaseUrl + '/adminUserProfile/'+ _id);
  }

  getAdminPayload(){
    var adminToken = this.getAdminToken();
    if(adminToken){
      var payLoad = atob(adminToken.split('.')[1]);
      return JSON.parse(payLoad);
    }else{
      return null;
    }


  }

  isLoggedIn(){
    var adminPayload = this.getAdminPayload();
    if(adminPayload){
      return adminPayload.exp > Date.now()/1000
    }else{
      return null;
    }
  }

  // upload(formData,id){

  //   console.log("the formdata is "+ formData);
  //   console.log("the formdata id is "+ id);
  //   for (var value of formData.values()) {
  //     console.log("the formdata iterator "+value); 
  //  }

  //   return this.http.post(environment.apiBaseUrl + '/upload',formData,id);
   
  // }

   fetch(id){
    console.log("the id is : "+id);
    return this.http.get(environment.apiBaseUrl + '/adminUserProfileData/'+id);
  }
}
