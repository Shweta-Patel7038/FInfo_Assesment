import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService } from 'src/app/services/authentication.service';
import * as data from "src/app/Sample-JSON-file.json";
import { Userdetail } from 'src/app/model/userdetail';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails:Userdetail[]=[];
  currentuser:any;
  settings = {
    pager: {
      display: true,
      perPage: 5,
    },
    edit: {
      editButtonContent: '<i class="fa fa-edit" style="font-size:32px"></i> ',
      saveButtonContent: 'SAVE ',
      cancelButtonContent: 'CANCEL ',
      confirmSave: true,
    },
    actions: {
      add: false,
      delete: false,
      columnTitle: '', // minimize the actions column size
      position: 'right',
    },
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="fa fa-trash" style="font-size:32px"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel',   
    },
    columns: {
      userId: {
        title: 'User ID',
      },
      firstName: {
        title: 'First Name',
      },
      lastName: {
        title: 'Last Name',
      },
      phoneNumber: {
        title: 'Phone Number',
      },
      emailAddress: {
        title: 'Email Address',
      },
    },
    attr: {
      class: 'table table-bordered'
    }
  };

  constructor(private http: HttpClient,
              private router:Router,
              private authenticationService: AuthenticationService,
              private userdetailsService:UserdetailsService) { }

  ngOnInit(): void {
    let currentuser= (JSON.parse(localStorage.getItem('currentUser')));
    this.currentuser=currentuser.firstName;
    this.getUserDetails();
    console.log(this.userDetails)
  }

  getUserDetails(){
    this.userDetails=this.userdetailsService.getUserDetails();
  }

  onSaveConfirm(event) {
    console.log("Edit Event In Console")
    console.log(event);
    event.confirm.resolve();
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
