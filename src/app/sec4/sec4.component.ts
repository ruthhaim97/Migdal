import { Component, Pipe } from "@angular/core";

import { CONTACTS } from '../contact'

@Pipe({
  name: "phone"
})

export class PhonePipe {
  transform(num:any) {
    num = "0" + num;
    return num.substr(0, 3) + "-" + num.substr(3, num.length);
  }
}

@Component({
  selector: 'app-sec4',
  templateUrl: './sec4.component.html',
  styleUrls: ['./sec4.component.css']
})

export class Sec4Component {

  contactPersons = CONTACTS;

  constructor() { }

  transform(rawNum:any) {
    rawNum = rawNum.charAt(0) != 0 ? "0" + rawNum : "" + rawNum;

    let newStr = "";
    let i = 0;

    for (; i < Math.floor(rawNum.length / 2) - 1; i++) {
      newStr = newStr + rawNum.substr(i * 2, 2) + "-";
    }

    return newStr + rawNum.substr(i * 2);
  }

  addNewContact() {
    this.contactPersons.push({
      id: this.contactPersons.length,
      deliveryFlag : this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
      type : {
          code : 5,
          value : "שאר"
      },
      firstName : "ישראל",
      lastName : "ישראלי",
      identity : 278545412,
      address : {
          homeNumber : 9,
          cityName : "רחובות",
          streetName : "אופנהיימר"
      },
      cellPhone : 525816206,
      email : "NIKITA_JAIN@AMAT.COM"
  })

  }

}
