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
  times1: Array<any>;
  times2: Array<any>;
  times3: Array<any>;
  times4: Array<any>;
  times5: Array<any>;
  times6: Array<any>;
  que6: Array<any>;
  messageClass;
  message;
  id;
  i;
  
  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
    
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
	  this.authService.admin_quest1(id_2).subscribe(response => {
		  if(response.length==0){
		   this.messageClass = 'alert alert-info'; // Set a success class
           this.message = "Questionnaire's result is empty"; // Set a success message
		   setTimeout(() => {
		   this.messageClass = ''; // Set a success class
           this.message = ""; // Set a success message
                    }, 3000);
		  }else{
	        this.authService.take_id_for_admin_quest(id_2,1);  
	        this.router.navigate(['/admin_result']);
          }
        });
  }

  // Function to submit form
  admin_quest2(id_2) {
	  this.authService.admin_quest2(id_2).subscribe(response => {
		if(response.length==0){
		   this.messageClass = 'alert alert-info'; // Set a success class
           this.message = "Questionnaire's result is empty"; // Set a success message
		  setTimeout(() => {
		   this.messageClass = ''; // Set a success class
           this.message = ""; // Set a success message
                    }, 3000);
		}else{
	  this.authService.take_id_for_admin_quest(id_2,2);  
	  this.router.navigate(['/admin_result']);
  }
        });
  }

  // Function to submit form
  admin_quest3(id_2) {
	  this.authService.admin_quest3(id_2).subscribe(response => {
		  if(response.length==0){
		   this.messageClass = 'alert alert-info'; // Set a success class
           this.message = "Questionnaire's result is empty"; // Set a success message
		  setTimeout(() => {
		   this.messageClass = ''; // Set a success class
           this.message = ""; // Set a success message
                    }, 3000);
		}else{
	  this.authService.take_id_for_admin_quest(id_2,3);  
	  this.router.navigate(['/admin_result']);
  }
        });
		
  }

  // Function to submit form
  admin_quest4(id_2) {
	  this.authService.admin_quest4(id_2).subscribe(response => {
		  
		if(response.length==0){
		   this.messageClass = 'alert alert-info'; // Set a success class
           this.message = "Questionnaire's result is empty"; // Set a success message
		  setTimeout(() => {
		   this.messageClass = ''; // Set a success class
           this.message = ""; // Set a success message
                    }, 3000);
		}else{
	  this.authService.take_id_for_admin_quest(id_2,4);  
	  this.router.navigate(['/admin_result']);
  }
        });
  }

  // Function to submit form
  admin_quest5(id_2) {	  
	  this.authService.admin_quest5(id_2).subscribe(response => {
		  
		if(response.length==0){
		   this.messageClass = 'alert alert-info'; // Set a success class
           this.message = "Questionnaire's result is empty"; // Set a success message
		  setTimeout(() => {
		   this.messageClass = ''; // Set a success class
           this.message = ""; // Set a success message
                    }, 3000);
		}else{
	  this.authService.take_id_for_admin_quest(id_2,5);  
	  this.router.navigate(['/admin_result']);
		}
        });
  }

  // Function to submit form
  admin_quest6(id_2) {
	  this.authService.admin_quest6(id_2).subscribe(response => {
		  
		if(response.length==0){
		   this.messageClass = 'alert alert-info'; // Set a success class
           this.message = "Questionnaire's result is empty"; // Set a success message
		  setTimeout(() => {
		   this.messageClass = ''; // Set a success class
           this.message = ""; // Set a success message
                    }, 3000);
		}else{
	       this.authService.take_id_for_admin_quest(id_2,6);  
	       this.router.navigate(['/admin_result']);
		}
        });
  }
  
 /* how_many1(){
	  
	  for(this.i=1;this.i<=this.uSER.length;this.i++){
		  this.how_many(this.uSER[this.i].user_id);
	  }
	  console.log(this.times1[0].count);
  }
  
  how_many(id_2){
	  this.authService.getAdminFirstQuest(id_2).subscribe(response => {
      this.times1 = response;
    });
	this.authService.getAdminSecondQuest(id_2).subscribe(response => {
      this.times2 = response;
    });
	this.authService.getAdminThreeQuest(id_2).subscribe(response => {
      this.times3 = response;
    });
	this.authService.getAdminFourthQuest(id_2).subscribe(response => {
      this.times4 = response;
    });
	this.authService.getAdminFifthQuest(id_2).subscribe(response => {
      this.times5 = response;
    });
	this.authService.getAdminSixQuest(id_2).subscribe(response => {
      this.times6 = response;
    });
        
  }*/ 
  
  ngOnInit() {
	this.onProfileGet();
    this.id = this.authService.sendId();
	if (this.id == null || this.id!=1){
		this.router.navigate(['/home']);
	}
  }

}
