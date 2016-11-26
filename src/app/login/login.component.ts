import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) { 

  }

  ngOnInit() {
  }

  TeacherLogin() {
    this.router.navigate(['teacher']);
  }

  StudentLogin() {
    this.router.navigate(['home']);    
  }  

  login() {
    this.af.auth.login();
  }
}
