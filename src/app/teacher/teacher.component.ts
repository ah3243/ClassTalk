import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {


  // Variables for incrementing the words on click
  inputScript: string = `This is an example of the text you could enter, although i'm not totally certain about how quickly it updates the students screen. Hopefully the delay should not be an issue. If it is however we can look at possibly doing a screen share or using a wireless mouse to toggle the words. This is an example of the text you could enter, although i'm not totally certain about how quickly it updates the students screen. Hopefully the delay should not be an issue. If it is however we can look at possibly doing a..`;
  script: string[] = [];
  cnt: number = 0;
  current: string = "";

  speech: FirebaseObjectObservable<any[]>;  
  constructor(af: AngularFire) {
    this.speech = af.database.object('/script');
   }

  ngOnInit() {
    this.script = this.inputScript.split(" ");
    this.clearVal();
  }

  clearVal() {
    this.speech.remove();
  }

  updateVal() {
    this.appendText();
    this.speech.set({ name: this.current });
    // Keep the page scrolled down after each click

  }

  appendText() {
    if (this.script[this.cnt]) {
      this.current += this.script[this.cnt] + " " ;
      this.cnt++;
      console.log("This is the current string: " + this.current);
    }
  }
}
