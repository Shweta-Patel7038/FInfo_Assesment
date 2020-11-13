import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import * as data from "src/app/Sample-JSON-file.json";
import { Userdetail } from 'src/app/model/userdetail';

@Component({
  selector: 'app-submitform',
  templateUrl: './submitform.component.html',
  styleUrls: ['./submitform.component.css']
})
export class SubmitformComponent implements OnInit {
  form: FormGroup;
  isEdit: Boolean = false;
  user: Userdetail = new Userdetail()

  constructor(
    private formBuilder: FormBuilder,
    private userdetailsService:UserdetailsService,
    private router:Router){}
  
  ngOnInit(){
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.form = this.formBuilder.group({
      userId: ['',Validators.required],
      firstName:  ['',Validators.required],
      lastName:  ['',Validators.required],
      emailAddress:  ['', [Validators.required, Validators.pattern(emailregex)]],
      phoneNumber:['',Validators.required],
      // gender:  ['',Validators.required],
    });
  }

  add(){
    if(this.form.valid){
      this.user= this.form.value;
      console.log(this.user)
      this.userdetailsService.addNewUser(this.user);
      this.resetForm();
      this.router.navigate(["/dashboard/home"])
      console.log(this.userdetailsService.getUserDetails())}
      else {
      alert('Please complete form');
    }
  }

  resetForm(){
    this.form.reset();
  }

  getErrorEmail() {
    return this.form.get('emailAddress').hasError('required') ? 'Field is required' :
      this.form.get('emailAddress').hasError('pattern') ? 'Not a valid emailaddress' :'';
  }
  
}
