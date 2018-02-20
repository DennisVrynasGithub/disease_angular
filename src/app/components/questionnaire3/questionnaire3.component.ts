import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questionnaire3',
  templateUrl: './questionnaire3.component.html',
  styleUrls: ['./questionnaire3.component.css']
})
export class Questionnaire3Component implements OnInit {


  form: FormGroup;
  selectedDay2: string = '';
  selectedDay3: string = '';
  selectedDay4: string = '';
  selectedDay5: string = '';
  selectedDay6: string = '';
  days2: any = ['1','2','3','4','5','6','7','8','9','10'];
  days3: any = ['1','2','3','4','5','6','7','8','9','10'];
  days4: any = ['1','2','3','4','5','6','7','8','9','10'];
  days5: any = ['1','2','3','4','5','6','7','8','9','10'];
  days6: any = ['1','2','3','4','5','6','7','8','9','10'];
  diseaseAutoComplete: Array<any>;
  states: any = ['autism', 'alabama', 'casxca'];
  messageClass;
  message;
  shhow = false;
  shhow2 = false;
  shhow3 = false;
  shhow4 = false;
  shhow5 = false;
  da;
  id;
  showresult=false;
  showresult2=false;
  showresult3=false;
  sum=0;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.que3(); // Create Angular 2 Form when component loads
  }

  private que3() {
    this.form = this.formBuilder.group({
      // Username Input
      age: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(2), // Minimum length is 3 characters
        Validators.maxLength(4) // Maximum length is 15 characters
      ])],
      chronic_problem: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])],
      gender: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])],
      years: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])],
      other_illnes: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])],
      medical: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3) // Minimum length is 3 characters
      ])]
    }); // Add custom validator to form for matching passwords
  }

  changeShow() {
    this.shhow = !this.shhow;
  }
  changeShow2() {
    this.shhow2 = !this.shhow2;
  }
  changeShow3() {
    this.shhow3 = !this.shhow3;
  }
  changeShow4() {
    this.shhow4 = !this.shhow4;
  }
  changeShow5() {
    this.shhow5 = !this.shhow5;
  }
  viewing() {
    return this.shhow;
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

  viewresult(){
    return this.showresult;
  }

  viewresult2(){
    return this.showresult2;
  }

  viewresult3(){
    return this.showresult3;
  }

  onQ3(){
    // Create user object form user's inputs
    const user = {
      gender: this.form.get('gender').value, // gender input field
      age: this.selectedDay2, // age input field
      chronic_problem: this.selectedDay3, // chronic_problem input field
      years: this.selectedDay4, // years input field
      other_illnes: this.selectedDay5, // other_illnes input field
      medical: this.selectedDay6, // medical input field
      id_2: this.id // gendre input field
    };

    var a = parseInt(this.selectedDay6);
    var b = parseInt(this.selectedDay2);
    var c = parseInt(this.selectedDay3);
    var d = parseInt(this.selectedDay4);
    var e = parseInt(this.selectedDay5);

    this.sum = a+b+c+d+e;

    if (this.sum>=0 && this.sum<=20){
      this.showresult =true;
    }else if (this.sum>=21 && this.sum<=40){
      this.showresult2 =true;
    }else{
      this.showresult3 =true;
    }
    // Function from authentication service to register user
    this.authService.quest3(user).subscribe(response => {
      // Resposne from registration attempt
      if (!response.success) {
        this.messageClass = 'alert alert-danger'; // Set an error class
        this.message = response.message; // Set an error message
      }
      else {
        this.messageClass = 'alert alert-success'; // Set a success class
        this.message = response.message; // Set a success message
// After 2 second timeout, navigate to the login page
        setTimeout(() => {
          this.router.navigate(['/dashboard']); // Redirect to login view
        }, 6000);
      }
    });
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
  }

}
