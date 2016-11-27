import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // items: FirebaseListObservable<any[]>;
  speech: FirebaseObjectObservable<any[]>;

  constructor(public af: AngularFire) { 
    // this.items = af.database.list('/items');
    this.speech = af.database.object('/script');
  }

  ngOnInit() {
  }

  scrollMe() {
    window.scrollTo(0,document.body.scrollHeight);
  }
    
  
}
