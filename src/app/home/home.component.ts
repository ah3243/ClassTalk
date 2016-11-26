import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) { 
    this.items = af.database.list('/items');
  }

  ngOnInit() {
  }

  save(name: string) {
    this.items.push(name);
  }
  deleteEverything() {
      this.items.remove();  
  }
    
  logout() {
    this.af.auth.logout();
  }
  login() {
    this.af.auth.login();
  }
}
