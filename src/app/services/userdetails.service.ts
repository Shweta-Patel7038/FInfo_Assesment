import { Injectable } from '@angular/core';
import { Userdetail } from '../model/userdetail';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  private userDetails:Userdetail[]=[
      {
        "userId": 1,
        "firstName": "Krish",
        "lastName": "Lee",
        "phoneNumber": "123456",
        "emailAddress": "krish.lee@learningcontainer.com"
      },
      {
        "userId": 2,
        "firstName": "racks",
        "lastName": "jacson",
        "phoneNumber": "123456",
        "emailAddress": "racks.jacson@learningcontainer.com"
      },
      {
        "userId": 3,
        "firstName": "denial",
        "lastName": "roast",
        "phoneNumber": "33333333",
        "emailAddress": "denial.roast@learningcontainer.com"
      },
      {
        "userId": 4,
        "firstName": "devid",
        "lastName": "neo",
        "phoneNumber": "222222222",
        "emailAddress": "devid.neo@learningcontainer.com"
      },
      {
        "userId": 5,
        "firstName": "jone",
        "lastName": "mac",
        "phoneNumber": "111111111",
        "emailAddress": "jone.mac@learningcontainer.com"
      },
      {
        "userId": 6,
        "firstName": "Kishan",
        "lastName": "Bagg",
        "phoneNumber": "123456789",
        "emailAddress": "kishan.bagg@learningcontainer.com"
      },
      {
        "userId": 7,
        "firstName": "vishal",
        "lastName": "bosde",
        "phoneNumber": "126126126",
        "emailAddress": "vishal.bosde@learningcontainer.com"
      },
      {
        "userId": 8,
        "firstName": "sweety",
        "lastName": "roast",
        "phoneNumber": "33334444",
        "emailAddress": "sweety.roast@learningcontainer.com"
      },
      {
        "userId": 9,
        "firstName": "devid",
        "lastName": "Bhosle",
        "phoneNumber": "231289076",
        "emailAddress": "devid.Bhosle@learningcontainer.com"
      },
      {
        "userId": 10,
        "firstName": "jone",
        "lastName": "mac",
        "phoneNumber": "111111111",
        "emailAddress": "jone.mac@learningcontainer.com"
      }

  ];
  constructor() { }

  getUserDetails():Userdetail[]{
    return this.userDetails;
  }

  addNewUser(user:Userdetail){
    this.userDetails.push(user);
  }

}
