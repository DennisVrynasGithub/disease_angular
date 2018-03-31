import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

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
  id;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
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
    this.authService.getProfileUser(this.da).subscribe(response => {
      this.uSER = response;
      this.user_user = this.da;
    })
  }

  // Function to submit form
  onPutName() {
    const user = {
      user_name: this.form.get('user_name').value, // Username input field
      user_email: this.da // Email input field
    };
	if(!this.form.get('user_name').value){
		this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = "You have to provide user name"; // Set error message
		setTimeout(() => {
          this.messageClass = "";
	      this.message = "";
        }, 3000);
	}else{
    // Function from authentication service to
    this.authService.putChangeName(user).subscribe(response => {
      if (!response.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = response.message; // Set error message
		setTimeout(() => {
         this.messageClass = "";
	     this.message = "";
        }, 3000);
      } else {
        this.messageClass = 'alert alert-success'; // Set bootstrap success class
        this.message = response.message; // Set success message
		setTimeout(() => {
         this.messageClass = "";
	     this.message = "";
        }, 3000);
      }
    })
	}
  }

  onPutPassword() {
    const user = {
      user_password: this.form.get('user_password').value, // Username input field
      user_email: this.da // Email input field
    };
	if(!this.form.get('user_password').value){
		this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = "You have to provide user password"; // Set error message
		setTimeout(() => {
          this.messageClass = "";
	      this.message = "";
        }, 3000);
	}else{
    // Function from authentication service to
    this.authService.putChangePassword(user).subscribe(response => {
      if (!response.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = response.message; // Set error message
		setTimeout(() => {
          this.messageClass = "";
	      this.message = "";
        }, 3000);
      } else {
        this.messageClass = 'alert alert-success'; // Set bootstrap success class
        this.message = response.message; // Set success message
		setTimeout(() => {
          this.messageClass = "";
	      this.message = "";
        }, 3000);
      }
    })
	}
  }

  onPutAge() {
    const user = {
      user_age: this.form.get('user_age').value, // Username input field
      user_email: this.da // Email input field
    };
	if(!this.form.get('user_age').value){
		this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = "You have to provide user password"; // Set error message
		setTimeout(() => {
          this.messageClass = "";
	      this.message = "";
        }, 3000);
	}else{
    // Function from authentication service to
    this.authService.putChangeAge(user).subscribe(response => {
      if (!response.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = response.message; // Set error message
		setTimeout(() => {
          this.messageClass = "";
	      this.message = "";
        }, 3000);
      } else {
        this.messageClass = 'alert alert-success'; // Set bootstrap success class
        this.message = response.message; // Set success message
		setTimeout(() => {
          this.messageClass = "";
	      this.message = "";
        }, 3000);
      }
    })
	}
  }

  changeShow() {
    this.show = !this.show;
  }

  viewing() {
    return this.show;
  }

  ngOnInit() {
    this.da = this.authService.sendEmail();
    this.onProfileGet();
    this.id = this.authService.sendId();
	console.log(this.id);
	if (this.id == null){
		this.router.navigate(['/home']);
	}
  }
}
