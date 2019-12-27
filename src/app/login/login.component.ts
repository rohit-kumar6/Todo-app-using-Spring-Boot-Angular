import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Component Property
  // Setting Default value of component property
  username = 'admin';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid Username and Password';

  // Router
  // Angular.giveMeRouter
  // Dependency Injection
  constructor(private router: Router) { }

  ngOnInit() {}

  // handleLogin are the Component Event
  handleLogin() {
    if (this.username === 'admin' && this.password === 'dummy') {
      this.invalidLogin = false;
      // Navigate to welcome page with username as argument
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
    console.log('Invalid Login');
    }
  }
