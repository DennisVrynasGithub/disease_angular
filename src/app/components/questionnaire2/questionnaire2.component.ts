import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questionnaire2',
  templateUrl: './questionnaire2.component.html',
  styleUrls: ['./questionnaire2.component.css']
})
export class Questionnaire2Component implements OnInit {

  form: FormGroup;
  selectedDay2: string = '';
  selectedDay3: string = '';
  selectedDay4: string = '';
  selectedDay5: string = '';
  days2: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  days3: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  days4: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  days5: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  shhow1 = true;
  shhow2 = false;
  shhow3 = false;
  shhow4 = false;
  shhow5 = false;
  shhow6 = false;
  da;
  id;
  messageClass;
  message;
  diseaseAutoComplete: Array<any>;
  states: any = ['autism', 'alabama', 'casxca'];
  showresult=false;
  showresult2=false;
  showresult3=false;
  sum=0;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.que2(); // Create Angular 2 Form when component loads
  }


  private que2() {
    this.form = this.formBuilder.group({
      // Username Input
      age: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(2), // Minimum length is 3 characters
        Validators.maxLength(4) // Maximum length is 15 characters
      ])],
      illnes_history: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])],
      gender: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])],
      medical_history: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])],
      succeed_time: ['', Validators.compose([
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
    this.shhow6 = !this.shhow6;
  }
  changeShow5() {
    this.shhow4 = !this.shhow4;
    this.shhow6 = !this.shhow6;
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

  viewing6() {
    return this.shhow6;
  }

  //event handler for the radio button's change event
  radioChangeHandler2(event: any) {
    //update the ui
    this.selectedDay2 = event.target.value;
  }

  //event handler for the radio button's change event
  radioChangeHandler3(event: any) {
    //update the ui
    this.selectedDay3 = event.target.value;
  }

  //event handler for the radio button's change event
  radioChangeHandler4(event: any) {
    //update the ui
    this.selectedDay4 = event.target.value;
  }

  //event handler for the radio button's change event
  radioChangeHandler5(event: any) {
    //update the ui
    this.selectedDay5 = event.target.value;
  }

   last_result(sum){
		this.authService.saveSum(sum);
		this.router.navigate(['/lastResultComponent']);
	}
	
  onQ2() {
	  if (!this.form.get('gender').value || !this.selectedDay2 || !this.selectedDay3 || !this.selectedDay4 || !this.selectedDay5)
	{ this.messageClass = 'alert alert-danger'; // Set an error class
        this.message = "Invalid input"; // Set an error message
		} 
	else{
    var a = parseInt(this.selectedDay2);
    var b = parseInt(this.selectedDay3);
    var c = parseInt(this.selectedDay4);
    var d = parseInt(this.selectedDay5);

    this.sum = a+b+c+d;
	
    // Create user object form user's inputs
    const user = {
      gender: this.form.get('gender').value, // gender input field
      age: this.selectedDay2, // age input field
      illnes_history: this.selectedDay3, // illnes_history input field
      medical_history: this.selectedDay4, // medical_history input field
      succeed_time: this.selectedDay5, // procedure input field
      date: this.form.get('date').value, // procedure input field
      sum: this.sum, // procedure input field
      id_2: this.id// gendre input field
    };

    // Function from authentication service to register user
    this.authService.quest2(user).subscribe(response => {
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
  }

  ngOnInit() {
    this.da = this.authService.sendEmail();
    this.authService.getAllDisease().subscribe(response => {
      this.diseaseAutoComplete = response;
      this.states = this.diseaseAutoComplete.map(function (item) {
        return item['name'];
      });
    });
    this.id = this.authService.sendId();
	console.log(this.id);
	if (this.id == null){
		this.router.navigate(['/home']);
	}
  }
}
