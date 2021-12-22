import { Component, OnInit } from '@angular/core';

import { CONTACTS } from '../contact';
import { Service} from './../service.service'

@Component({
  selector: 'app-sec3',
  templateUrl: './sec3.component.html',
  styleUrls: ['./sec3.component.css']
})
export class Sec3Component implements OnInit {

  constructor(private service:Service) { }

  contactList = CONTACTS;
  inProcess = this.service.process;

  ngOnInit(): void {
  }

  addProcessToContact() {
    this.contactList.push({
      id: this.contactList.length,
      deliveryFlag : this.contactList[this.contactList.length - 1] ? this.contactList[this.contactList.length - 1].deliveryFlag ? false : true : true,
      type : {
          code : 5,
          value : this.inProcess.insured.position
      },
      firstName : this.inProcess.insured.firstName,
      lastName : this.inProcess.insured.lastName,
      identity : this.inProcess.insured.identity,
      address : {
          homeNumber : 0,
          cityName : this.inProcess.insured.address.cityName,
          streetName : this.inProcess.insured.address.streetName
      },
      cellPhone : this.inProcess.insured.address.cellPhone,
      email : this.inProcess.insured.email
  });
  }

  deleteAll() {
    this.contactList.splice(0);
  }

  deleteContacts() {
    this.contactList.splice(1);
  }

}
