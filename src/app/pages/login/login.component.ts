import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  isLogedIn: boolean = false;

  constructor() {
    this.isLogedIn = localStorage.getItem("login") ? true : false;
  }

  login() {
    this.isLogedIn = true;
    localStorage.setItem('login', "true");
  } 

  logout() {
    this.isLogedIn = false;
    localStorage.removeItem('login')
  }

}
