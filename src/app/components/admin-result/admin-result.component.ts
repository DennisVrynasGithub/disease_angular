import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-result',
  templateUrl: './admin-result.component.html',
  styleUrls: ['./admin-result.component.css']
})
export class AdminResultComponent implements OnInit {

take_results: Array<any>;
user_id;
number;
que6: Array<any>;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
	  
	  this.take_results = this.authService.send_id_for_admin_quest();
	  this.user_id = this.authService.send_id_for_admin_quest1();
	  if(this.user_id==6){
		  this.number=6;
	  // Function from authentication service to
        this.authService.admin_quest6(this.take_results).subscribe(response => {
        this.que6 = response;
        })
	  }else if(this.user_id==5){
		  this.number=5;
		  // Function from authentication service to
        this.authService.admin_quest5(this.take_results).subscribe(response => {
        this.que6 = response;
		})
      }else if(this.user_id==1){
		  this.number=1;
		  // Function from authentication service to
        this.authService.admin_quest1(this.take_results).subscribe(response => {
        this.que6 = response;
		})
      }else if(this.user_id==4){
		  this.number=4;
		  // Function from authentication service to
        this.authService.admin_quest4(this.take_results).subscribe(response => {
        this.que6 = response;
		})
      }else if(this.user_id==3){
		  this.number=3;
		  // Function from authentication service to
        this.authService.admin_quest3(this.take_results).subscribe(response => {
        this.que6 = response;
		})
      }else if(this.user_id==2){
		  this.number=2;
		  // Function from authentication service to
        this.authService.admin_quest2(this.take_results).subscribe(response => {
        this.que6 = response;
		})
      }
  }
}
