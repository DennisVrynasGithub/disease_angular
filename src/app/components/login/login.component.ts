import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  loged_in = false;
  y;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.LoginForm(); // Create Angular 2 Form when component loads
  }

  // Function to create registration form
  LoginForm() {
    this.form = this.formBuilder.group({
      // Username Input
      user_email: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(7), // Minimum length is 3 characters
        Validators.maxLength(25) // Maximum length is 15 characters
      ])],
      // Username Input
      user_password: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(5), // Minimum length is 3 characters
        Validators.maxLength(35) // Maximum length is 15 characters
      ])]
    });
  }

  // OneDisease call
  onLoginSubmit() {

    if (!this.form.get('user_email').value) {
      this.messageClass = 'alert alert-danger'; // Set bootstrap error class
      this.message = "Email was not provided!!!"; // Set error message
    } else {
      if (!this.form.get('user_password').value) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = "Password was not provided!!!"; // Set error message
      } else {
        const user = {
          user_email: this.form.get('user_email').value, // Username input field
          user_password: this.form.get('user_password').value
        };
        // Function from authentication service to
        this.authService.login(user).subscribe(response => {
          if (!response.success) {
            this.messageClass = 'alert alert-danger'; // Set bootstrap error class
            this.message = response.message; // Set error message
          } else {
            this.messageClass = 'alert alert-success'; // Set bootstrap success class
            this.message = response.message; // Set success message
            this.loged_in = true;
            // Function to store user's token in client local storage
            this.y = response.user_email;
            this.authService.takeEmail(this.form.get('user_email').value);
            this.authService.storeUserData(this.y, this.loged_in);
            // After 2 seconds, redirect to dashboard page
            setTimeout(() => {
              // Check if user was redirected or logging in for first time
              this.router.navigate(['/dashboard']); // Navigate to dashboard view
            }, 1000);
          }
        })
      }
    }
  }

  ngOnInit() {
  }

}
