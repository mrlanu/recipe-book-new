import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCrbzUvW0PQkYI3Jb509zGt2fbPhy-e0fw',
      authDomain: 'ng-recipe-book-70058.firebaseapp.com'
    });
  }



  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
