import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

declare var name: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  faCoffee = faCoffee;


}
