import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  form: FormGroup;
  uSER: Array<any>;
  que1: Array<any>;
  que2: Array<any>;
  que3: Array<any>;
  que4: Array<any>;
  que5: Array<any>;
  que6: Array<any>;
  show1:boolean = false;
  show2:boolean = false;
  show3:boolean = false;
  show4:boolean = false;
  show5:boolean = false;
  show6:boolean = false;
  id;
  
  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  show_div1(){
	  return this.show1;
  }
  show_div2(){
	  return this.show2;
  }
  show_div3(){
	  return this.show3;
  }
  show_div4(){
	  return this.show4;
  }
  show_div5(){
	  return this.show5;
  }
  show_div6(){
	  return this.show6;
  }
  
  // Function to submit form
  onProfileGet() {
    // Function from authentication service to
    this.authService.view_list().subscribe(response => {
      this.uSER = response;
    })
  }

  // Function to submit form
  admin_quest1(id_2) {
	  this.show1 = true;
	  this.show2=false;
	  this.show3=false;
	  this.show4=false;
	  this.show5=false;
	  this.show6=false;
    // Function from authentication service to
    this.authService.admin_quest1(id_2).subscribe(response => {
      this.que1 = response;
    })
  }

  // Function to submit form
  admin_quest2(id_2) {
	  this.show1=false;
	  this.show2=true; 
	  this.show3=false;
	  this.show4=false; 
	  this.show5=false;
	  this.show6=false;
    // Function from authentication service to
    this.authService.admin_quest2(id_2).subscribe(response => {
      this.que2 = response;
    })
  }

  // Function to submit form
  admin_quest3(id_2) {
	  this.show1=false;
	  this.show2=false;
	  this.show3=true;
	  this.show4=false;
	  this.show5=false; 
	  this.show6=false;
    // Function from authentication service to
    this.authService.admin_quest3(id_2).subscribe(response => {
      this.que3 = response;
    })
  }

  // Function to submit form
  admin_quest4(id_2) {
	  this.show1=false;
	  this.show2=false;
	  this.show3=false;
	  this.show4=true;
	  this.show5=false;
	  this.show6=false;
    // Function from authentication service to
    this.authService.admin_quest4(id_2).subscribe(response => {
      this.que4 = response;
    })
  }

  // Function to submit form
  admin_quest5(id_2) {	  
	  this.show1=false;
	  this.show2=false;
	  this.show3=false;
	  this.show4=false;
	  this.show5=true;
	  this.show6=false;
    // Function from authentication service to
    this.authService.admin_quest5(id_2).subscribe(response => {
      this.que5 = response;
    })
  }

  // Function to submit form
  admin_quest6(id_2) {
	  this.show1=false;
	  this.show2=false;
	  this.show3=false;
	  this.show4=false;
	  this.show5=false;
	  this.show6=true;
    // Function from authentication service to
    this.authService.admin_quest6(id_2).subscribe(response => {
      this.que6 = response;
    })
  }
  
  
  
  ngOnInit() {
	this.onProfileGet();
    this.id = this.authService.sendId();
	console.log(this.id);
	if (this.id == null || this.id!=1){
		this.router.navigate(['/home']);
	}
  }

}
