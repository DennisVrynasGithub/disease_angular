import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  uSER: Array<any>;
  show = false;
  user_user;
da;
  messageClass;
  message;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder) {
    this.createNewForm(); // Create Angular 2 Form when component loads
  }

  // Function to create registration form
  createNewForm() {
    this.form = this.formBuilder.group({
      // Username Input
      user_email: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15) // Maximum length is 15 characters
      ])],
      user_name: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15) // Maximum length is 15 characters
      ])],
      user_password: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15) // Maximum length is 15 characters
      ])],
      user_age: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15) // Maximum length is 15 characters
      ])]
    }); // Add custom validator to form for matching passwords
  }

  // Function to submit form
  onProfileGet() {
    // Function from authentication service to
    this.authService.getProfileUser(this.form.get('user_email').value).subscribe(response => {
      this.uSER = response;
      this.user_user = this.form.get('user_email').value;
    })
  }

  // Function to submit form
  onPutName() {
    const user = {
      user_name: this.form.get('user_name').value, // Username input field
      user_email: this.da // Email input field
    };
    // Function from authentication service to
    this.authService.putChangeName(user).subscribe(response => {
      if (!response.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = response.message; // Set error message
      } else {
        this.messageClass = 'alert alert-success'; // Set bootstrap success class
        this.message = response.message; // Set success message
      }
    })
  }

  onPutPassword() {
    const user = {
      user_password: this.form.get('user_password').value, // Username input field
      user_email: this.da // Email input field
    };
    // Function from authentication service to
    this.authService.putChangePassword(user).subscribe(response => {
      if (!response.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = response.message; // Set error message
      } else {
        this.messageClass = 'alert alert-success'; // Set bootstrap success class
        this.message = response.message; // Set success message
      }
    })
  }

  onPutAge() {
    const user = {
      user_age: this.form.get('user_age').value, // Username input field
      user_email: this.da // Email input field
    };
    // Function from authentication service to
    this.authService.putChangeAge(user).subscribe(response => {
      if (!response.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = response.message; // Set error message
      } else {
        this.messageClass = 'alert alert-success'; // Set bootstrap success class
        this.message = response.message; // Set success message
      }
    })
  }

  changeShow() {
    this.show = !this.show;
  }

  viewing() {
    return this.show;
  }

  ngOnInit() {
    this.da = this.authService.sendEmail();
  }
}
