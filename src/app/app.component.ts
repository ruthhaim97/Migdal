import { Component } from '@angular/core';

import { CONTACTS } from './contact'

  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'migdal-test';

  contactPersons = CONTACTS;
}
