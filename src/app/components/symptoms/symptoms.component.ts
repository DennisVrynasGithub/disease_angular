import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  form: FormGroup;
  sYMPTOM: Array<any>;
  sYMPTOMS: Array<any>;
  showview =true;
  showview2 =true;
  message;
  a;
  id;
  messageClass;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.symptomForm(); // Create Angular 2 Form when component loads
  }

  symptomForm() {
    this.form = this.formBuilder.group({
      // Username Input
      symptom: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15) // Maximum length is 15 characters
      ])]
    });
  }

  //all disease call
    onTwoSymptomSubmit() {
    const x = this.form.get('symptom').value.split(" ");
	console.log(x);
    if (x[0]!=null && x[1]!=null && x[2]!=null && x[3]!=null && x[4]!=null && x[5]!=null && x[6]==null ) {
     // Function from authentication service to
      this.authService.getSymptomSix(x[0], x[1], x[2], x[3], x[4], x[5]).subscribe(response => {
        this.sYMPTOMS = response
      })
    }else if (x[0]!=null && x[1]!=null && x[2]!=null && x[3]!=null && x[4]!=null && x[5]==null) {
      // Function from authentication service to
      this.authService.getSymptomFive(x[0], x[1], x[2], x[3], x[4]).subscribe(response => {
        this.sYMPTOMS = response
      })
    }else if (x[0]!=null && x[1]!=null && x[2]!=null && x[3]!=null && x[4]==null) {
      // Function from authentication service to
      this.authService.getSymptomFour(x[0], x[1], x[2], x[3]).subscribe(response => {
        this.sYMPTOMS = response
      })
    }else if (x[0]!=null && x[1]!=null && x[2]!=null && x[3]==null) {
      // Function from authentication service to
      this.authService.getSymptomThree(x[0], x[1], x[2]).subscribe(response => {
        this.sYMPTOMS = response
      })
    }else if (x[0]!=null && x[1]!=null && x[2]==null) {
      // Function from authentication service to
      this.authService.getSymptomTwo(x[0], x[1]).subscribe(response => {
        this.sYMPTOMS = response
      })
    }else if (x[0]!=null && x[1]==null) {
		if(x[0]==''){
			this.messageClass = 'alert alert-danger'; // Set bootstrap error class
      this.message = "You don't have any symptom!!!!!"; // Set error message
					setTimeout(() => {
      this.messageClass = "";
	  this.message = "";
    }, 3000);
		}
		else{
         // Function from authentication service to
         this.authService.getSymptomOne(x[0]).subscribe(response => {
         this.sYMPTOMS = response
		})}
    }else{
      this.messageClass = 'alert alert-danger'; // Set bootstrap error class
      this.message = "Symptoms are more than six!!!!!"; // Set error message
					setTimeout(() => {
      this.messageClass = "";
	  this.message = "";
    }, 3000);
    }
  }

    viewmore(a){
    console.log(a);
    this.a = a;
    console.log(this.a);
    this.authService.takediseasename(this.a);
    setTimeout(() => {
      this.router.navigate(['/result']); // Redirect to login view
    }, 1000);
  }
  
  ngOnInit() {
    this.id = this.authService.sendId();
	console.log(this.id);
	if (this.id == null){
		this.router.navigate(['/home']);
	}
  }

}
