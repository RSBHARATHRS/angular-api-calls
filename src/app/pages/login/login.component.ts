import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  login() {
    localStorage.setItem('login', "true");
  } 

  logout() {
    localStorage.removeItem('login')
  }

}
