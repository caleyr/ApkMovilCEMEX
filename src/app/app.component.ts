import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  initializeApp(){
    const theme = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.classList.toggle( 'light' );
    console.log(theme.matches);
  }
}
