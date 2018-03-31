import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questionnaire5',
  templateUrl: './questionnaire5.component.html',
  styleUrls: ['./questionnaire5.component.css']
})
export class Questionnaire5Component implements OnInit {

  form: FormGroup;
  selectedDay: string = '';
  selectedDay2: string = '';
  selectedDay3: string = '';
  selectedDay4: string = '';
  selectedDay5: string = '';
  selectedDay6: string = '';
  days: any = ['1','2','3','4','5','6','7','8','9','10'];
  days2: any = ['1','2','3','4','5','6','7','8','9','10'];
  days3: any = ['1','2','3','4','5','6','7','8','9','10'];
  days4: any = ['1','2','3','4','5','6','7','8','9','10'];
  days5: any = ['1','2','3','4','5','6','7','8','9','10'];
  days6: any = ['1','2','3','4','5','6','7','8','9','10'];
  messageClass;
  message;
  shhow1 = true;
  shhow2 = false;
  shhow3 = false;
  shhow4 = false;
  shhow5 = false;
  shhow6 = false;
  shhow7 = false;
  da;
id;
  showresult=false;
  showresult2=false;
  showresult3=false;
  sum=0;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.que5(); // Create Angular 2 Form when component loads
  }

  private que5() {
    this.form = this.formBuilder.group({
      // Username Input
      age: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(2), // Minimum length is 3 characters
        Validators.maxLength(4) // Maximum length is 15 characters
      ])],
      illnes: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])],
      medical: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])],
      side_effect: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])],
      new_medical: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])],
      date: ['', Validators.compose([
        Validators.required
      ])]
    }); // Add custom validator to form for matching passwords
  }


  changeShow1() {
    this.shhow1 = !this.shhow1;
    this.shhow2 = !this.shhow2;
  }
  changeShow2() {
    this.shhow2 = !this.shhow2;
    this.shhow3 = !this.shhow3;
  }
  changeShow3() {
    this.shhow3 = !this.shhow3;
    this.shhow4 = !this.shhow4;
  }
  changeShow4() {
    this.shhow4 = !this.shhow4;
    this.shhow5 = !this.shhow5;
  }
  changeShow5() {
    this.shhow5 = !this.shhow5;
    this.shhow7 = !this.shhow7;
  }
  changeShow6() {
    this.shhow5 = !this.shhow5;
    this.shhow7 = !this.shhow7;
  }

  viewing1() {
    return this.shhow1;
  }

  viewing2() {
    return this.shhow2;
  }

  viewing3() {
    return this.shhow3;
  }

  viewing4() {
    return this.shhow4;
  }

  viewing5() {
    return this.shhow5;
  }

  viewing7() {
    return this.shhow7;
  }

  //event handler for the radio button's change event
  radioChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }

  //event handler for the radio button's change event
  radioChangeHandler2 (event: any) {
    //update the ui
    this.selectedDay2 = event.target.value;
  }

  //event handler for the radio button's change event
  radioChangeHandler3 (event: any) {
    //update the ui
    this.selectedDay3 = event.target.value;
  }

  //event handler for the radio button's change event
  radioChangeHandler4 (event: any) {
    //update the ui
    this.selectedDay4 = event.target.value;
  }

  //event handler for the radio button's change event
  radioChangeHandler5 (event: any) {
    //update the ui
    this.selectedDay5 = event.target.value;
  }

  //event handler for the radio button's change event
  radioChangeHandler6 (event: any) {
    //update the ui
    this.selectedDay6 = event.target.value;
  }
  
last_result(sum){
		this.authService.saveSum(sum);
		this.router.navigate(['/lastResultComponent']);
	}

  onQ5(){
	  
	var a = parseInt(this.selectedDay);
    var b = parseInt(this.selectedDay2);
    var c = parseInt(this.selectedDay3);
    var d = parseInt(this.selectedDay4);
    var e = parseInt(this.selectedDay5);
    var f = parseInt(this.selectedDay6);

    this.sum = a+b+c+d+e+f;

    // Create user object form user's inputs
    const user = {
      gender: this.selectedDay, // gender input field
      age: this.selectedDay2, // age input field
      illnes: this.selectedDay3, // illnes_history input field
      medical: this.selectedDay4, // medical input field
      side_effect: this.selectedDay5, // side_effect input field
      new_medical: this.selectedDay6, // new_medical input field
      date: this.form.get('date').value, // new_medical input field
      sum: this.sum, // new_medical input field
      id_2: this.id // gendre input field
    };

    
    // Function from authentication service to register user
    this.authService.quest5(user).subscribe(response => {
      // Resposne from registration attempt
      if (!response.success) {
        this.messageClass = 'alert alert-danger'; // Set an error class
        this.message = response.message; // Set an error message
      }
      else {
        this.messageClass = 'alert alert-success'; // Set a success class
        this.message = response.message; // Set a success message
        // After 2 second timeout, navigate to the login page
        this.last_result(this.sum);
      }
    });
  }

  ngOnInit() {
    this.da = this.authService.sendEmail();
    
    this.id = this.authService.sendId();
	console.log(this.id);
	if (this.id == null){
		this.router.navigate(['/home']);
	}
  }

}
