import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {


  // Variables for incrementing the words on click
  inputScript: string = `Hello! I thought that I would share with you some of the materials I’m really into at the moment because the Institute of Making is about the relationship between materials and processes - so this began in some respects it's a life's work.

It began quite formally at UCL about 10 years ago when we brought our materials library - which myself and the other director Nigel Martin have been building for about the last 10 years. We wanted to celebrate the relationship between materials and process because these things are together here at UCL. It's essentially floor to ceiling cabinets and curious stuff - it's not like a museum. Everything in there is handleable and we have to accept that things might get broken. But in breaking things you learn about materials and you might want to take something down to the workshop to fix it. We are interested in the whole journey of the materials and what we get up to when we handle them - that also constitutes making. I guess today I want to really concentrate on some of my favourite materials of the moment and talk to you about them and show them to you.

I suppose one of the important sort of things in material science is that notion that inside stuff, inside matter, there are structures. And those structures are organised in such a way that they give properties to the things. The ability for a steel bar to be stiff is all about the internal structure and the arrangement of both the atoms and the crystals inside that. And you might think ‘well what do I mean by the word crystals?’, because culturally we think of crystals as the stuff that we might find in a rock or in a gem shop. Some people might think of ice crystals or something that you shine a light through. But you definitely don't think of and you don't use the word crystals to think of metal. But in fact all metals are made of crystals and it's the arrangement and configurations and shape and size of those crystals that give lots of properties.
`;
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
