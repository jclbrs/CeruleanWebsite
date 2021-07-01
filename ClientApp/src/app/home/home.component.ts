import { Component } from '@angular/core';
import { faGamepad, faExternalLinkAlt, faTachometerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  faGamepad = faGamepad;
  arrowLink = faExternalLinkAlt;
  tachometer = faTachometerAlt;
  users = faUsers;
}
