import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
<<<<<<< HEAD
  constructor() {
    this.initializeApp();
  }

  initializeApp(){
    const theme = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.classList.toggle( 'light' );
    console.log(theme.matches);
=======
  constructor() {}

  ionViewWillEnter() {
    console.log('WillEnter');
>>>>>>> 27789ed10925a636f3efff4d759fe370986d64d8
  }
}
