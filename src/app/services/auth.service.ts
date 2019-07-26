import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  api = environment.apiUrl;
  constructor(public http: HttpClient) { }


  getLogin(data){
   return this.http.post(this.api+'users/login',data);
  }
}
