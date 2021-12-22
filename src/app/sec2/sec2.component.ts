import { Component, OnInit } from '@angular/core';
import { Service} from './../service.service'

@Component({
  selector: 'app-sec2',
  templateUrl: './sec2.component.html',
  styleUrls: ['./sec2.component.css']
})
export class Sec2Component implements OnInit {

  constructor(private service:Service) { }

  inProcess = this.service.process;

  ngOnInit(): void {
  }

  isCompanyEmployer() {
    if(!this.inProcess || !this.inProcess.insured || !this.inProcess.insured.companyEmployer) {
        return '';
    }else{
        return 'עובד חברה - ' + this.inProcess.insured.position;
    }
}
}
