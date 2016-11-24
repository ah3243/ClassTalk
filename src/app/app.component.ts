import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.items = af.database.list('/items');
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