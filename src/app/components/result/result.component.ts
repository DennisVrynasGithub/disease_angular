import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  a;
  id;
  results: Array<any>;
  views: false;
  disease_id;
  form: FormGroup;
  message;
  messageClass;

  constructor(
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router)
  { this.createForm();}

  // Function to create registration form
  createForm() {
    this.form = this.formBuilder.group({
      // Username Input
      disease_id: ['', Validators.compose([
        Validators.required
      ])],
      // Password Input
      id: ['', Validators.compose([
        Validators.required
      ])]
    }); // Add custom validator to form for matching passwords
  }
  
  
adDisease(){
	const user = {
      disease_id: this.disease_id, // Username input field
      id: this.id  // Password input field
    };
	this.authService.add_disease_history(user).subscribe(response => {
      if (!response.success) {
                    this.messageClass = 'alert alert-danger'; // Set an error class
                    this.message = response.message; // Set an error message
					setTimeout(() => {
          this.messageClass = "";
	      this.message = "";
        }, 2000);
                  }
                  else {
                    this.messageClass = 'alert alert-success'; // Set a success class
                    this.message = response.message; // Set a success message
					setTimeout(() => {
          this.messageClass = "";
	      this.message = "";
        }, 2000);
                  }
    })
}
  
  view(disease_id){
	  this.disease_id = disease_id;
	  return this.views;
  }
  
  ngOnInit() {
    this.a = this.authService.senddiseasename();
    // Function from authentication service to
    this.authService.getDisease(this.a).subscribe(response => {
      this.results = response;
    })
    this.id = this.authService.sendId();
	if (this.id == null){
		this.router.navigate(['/home']);
	}
	
  }

}
