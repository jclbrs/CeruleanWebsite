import { Component, OnInit } from '@angular/core';
import { faCalendarCheck, faPaw, faTrophy} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cerulean-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  calendarCheck = faCalendarCheck;
  paw = faPaw;
  trophy = faTrophy;

  constructor() { }

  ngOnInit(): void {


  }

}
