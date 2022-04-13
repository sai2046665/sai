import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {User} from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User={
    username:'',
    password:''
  };


  noAuthHeader = {headers: new HttpHeaders({'NoAuth':'True'})};


  constructor(private http:HttpClient) { }

  // postUser(user:User){
  //   return this.http.post(environment.apiBaseUrl+)
  // }
  login(username,password){
    console.log("inside service");
    return this.http.post(environment.apiBaseUrl + '/authenticate',{username,password},this.noAuthHeader);
  }

  userRegister(name: string, username: string, password: string,address:string){
    return this.http.post(environment.apiBaseUrl + '/userRegister',{name,username,password,address})
  }

  getUserProfile(){
    return this.http.get(environment.apiBaseUrl + '/userprofile');
  }


  //Helper Methods
  setToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = this.getToken();
    if(token){
      var payLoad = atob(token.split('.')[1]);
      return JSON.parse(payLoad);
    }else{
      return null;
    }
  }

  isLoggedIn(){
    var payload = this.getUserPayload();
    if(payload){
      return payload.exp > Date.now()/1000
    }else{
      return false;
    }
  }

  fetch(id){
    console.log("the id is : "+id);
    return this.http.get(environment.apiBaseUrl + '/adminUserProfileData',id);
  }
}
