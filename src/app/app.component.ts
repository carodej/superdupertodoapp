import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Super Duper Todo App';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDWnCy9gFRRi7SxwokON1JRPuQw1DE6jFM',
      authDomain: 'superdupertodoapp.firebaseio.com/',
    });
  }
}
