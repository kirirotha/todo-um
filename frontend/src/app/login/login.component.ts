import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "Joe Schmoe";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username);
    if(this.username === "Levi" && this.password === "Um"){
      this.route.navigate(['welcome', this.username])
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }

}
