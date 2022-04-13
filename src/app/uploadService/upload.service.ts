import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }


  upload(formData:any,id:string){

    for (var value of formData.values()) {
         console.log("the formdata iterator "+value); 
    }
      return this.http.post(environment.apiBaseUrl + '/upload/'+id,formData);   
  }
   
}
