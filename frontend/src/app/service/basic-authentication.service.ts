import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticateUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  // authenticate(username, password){
  //   if(username === "Levi" && password === "Um"){
  //     sessionStorage.setItem('authenticateUser', username)
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('token')
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

  executeAuthenticationService(username, password){
    // let basciAuthHeaderString = this.createBasicAuthenticationHttpHeaders();
    // let username = "Levi";
    // let password = "Um";
    let basciAuthHeaderString = 'Basic ' + window.btoa(username + ':' +  password);

    let headers = new HttpHeaders({
      Authorization: basciAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data =>{
            sessionStorage.setItem('authenticateUser', username);
            sessionStorage.setItem('token', basciAuthHeaderString);
            return true
        })
      );
    // console.log("HelloWorldBean")
  }

  
}

export class AuthenticationBean{
  constructor(public message: string){

  }
}