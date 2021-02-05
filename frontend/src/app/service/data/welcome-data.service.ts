import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("HelloWorldBean")
  }
  
  executeHelloWorldServiceWithPathVariable(name){
    // let basciAuthHeaderString = this.createBasicAuthenticationHttpHeaders();

    // let headers = new HttpHeaders({
    //   Authorization: basciAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      // {headers}
      );
    // console.log("HelloWorldBean")
  }

  // createBasicAuthenticationHttpHeaders(){
  //   let username = "Levi";
  //   let password = "Um";
  //   let basciAuthHeaderString = 'Basic ' + window.btoa(username + ':' +  password);
  //   return basciAuthHeaderString;
  // }
}
