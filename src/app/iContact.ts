export interface Contacts {  
    id : Number,
    deliveryFlag : boolean;
    type : { code : Number, value : String };
    firstName : String;
    lastName : String;
    identity : Number;
    address : { homeNumber : Number, cityName : String, streetName : String };
    cellPhone : any;
    email : String;
  }