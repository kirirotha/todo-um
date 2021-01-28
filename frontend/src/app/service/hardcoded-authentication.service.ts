import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username, password){
    if(username === "Levi" && password === "Um"){
      return true;
    }else{
      return false;
    }
  }
}
