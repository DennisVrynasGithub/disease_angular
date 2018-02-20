import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  processing = false;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm(); // Create Angular 2 Form when component loads
  }
// Function to create registration form
  createForm() {
    this.form = this.formBuilder.group({
      // Username Input
      username: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15) // Maximum length is 15 characters
      ])],
      // Password Input
      password: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(8), // Minimum length is 8 characters
        Validators.maxLength(35) // Maximum length is 35 characters
      ])],
      // Email Input
      email: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(8), // Minimum length is 8 characters
        Validators.maxLength(35) // Maximum length is 35 characters
      ])],
      // Age Input
      age: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(2), // Minimum length is 8 characters
        Validators.maxLength(3) // Maximum length is 35 characters
      ])],
      // Country Input
      country: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 8 characters
        Validators.maxLength(35) // Maximum length is 35 characters
      ])],
      // Gendre Input
      gendre: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(4), // Minimum length is 8 characters
        Validators.maxLength(6) // Maximum length is 35 characters
      ])],
      // Confirm Password Input
      confirm: ['', Validators.required] // Field is required
    }); // Add custom validator to form for matching passwords
  }

  // Function to submit form
  onRegisterSubmit() {
    this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
    // this.disableForm(); // Disable the form
    // Create user object form user's inputs
    const user = {
      username: this.form.get('username').value, // Username input field
      password: this.form.get('password').value, // Password input field
      email: this.form.get('email').value, // email input field
      age: this.form.get('age').value, // age input field
      country: this.form.get('country').value, // country input field
      gendre: this.form.get('gendre').value // gendre input field
    };


    if (!this.form.get('username').value) {
      this.messageClass = 'alert alert-danger'; // Set bootstrap error class
      this.message = "username was not provided!!!"; // Set error message
    }
    else{
      if (!this.form.get('password').value) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = "password was not provided!!!"; // Set error message
      }
      else{
        if (!this.form.get('email').value) {
          this.messageClass = 'alert alert-danger'; // Set bootstrap error class
          this.message = "email was not provided!!!"; // Set error message
        }
        else{
          if (!this.form.get('age').value) {
            this.messageClass = 'alert alert-danger'; // Set bootstrap error class
            this.message = "age was not provided!!!"; // Set error message
          }
          else{
            if (!this.form.get('country').value) {
              this.messageClass = 'alert alert-danger'; // Set bootstrap error class
              this.message = "country was not provided!!!"; // Set error message
            }
            else{
              if (!this.form.get('username').value) {
                this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                this.message = "gendre was not provided!!!"; // Set error message
              }
              else{
                // Function from authentication service to register user
                this.authService.registerUser(user).subscribe(response => {
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
                      this.router.navigate(['/login']); // Redirect to login view
                    }, 2000);
                  }
                })
              }
            }
          }
        }
      }
    }



  }

  ngOnInit() {
  }

}
