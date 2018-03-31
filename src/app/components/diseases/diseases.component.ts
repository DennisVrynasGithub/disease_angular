import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {

  form: FormGroup;
  dISEASE: Array<any>;
  diseaseAutoComplete: Array<any>;
  letter;
  a;
  dISEASEletter: Array<any>;
  states: any =['autism','alabama','casxca'];
  id;
  disease_id;
  views: false;
  view_b:boolean = false;
  messageClass;
  message;

  constructor(
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router
              ) {
    this.diseaseForm(); // Create Angular 2 Form when component loads
  }

  diseaseForm() {
    this.form = this.formBuilder.group({
      // Username Input
      disease: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15) // Maximum length is 15 characters
      ])],
      search: [null]
    });
  }

  view_button(){
	  return this.view_b;
  }
  
  // OneDisease call
  onDiseaseSubmit() {
	  this.view_b =true;
    // Function from authentication service to
	if (this.form.get('disease').value){
    this.authService.getDisease(this.form.get('disease').value).subscribe(response => {
      this.dISEASE = response;
    })
	}else{
		this.messageClass = 'alert alert-danger'; // Set an error class
                    this.message = "Please fill the field"; // Set an error message
					setTimeout(() => {
      this.messageClass = "";
	  this.message = "";
    }, 3000);
	}
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
    }, 3000);
                  }
                  else {
                    this.messageClass = 'alert alert-success'; // Set a success class
                    this.message = response.message; // Set a success message
					setTimeout(() => {
      this.messageClass = "";
	  this.message = "";
    }, 3000);
                  }
    })
}
  
  view(disease_id){
	  this.disease_id = disease_id;
	  return this.views;
  }
  
  onFindLetterSubmit() {
    console.log(this.letter);
    this.authService.getDiseaseFromLetter(this.letter).subscribe(response => {
      this.dISEASEletter = response
    })
  }

  findLetter(letter) {
    this.letter = letter;
    this.onFindLetterSubmit();
  }
    viewmore(a){
    this.a = a;
    this.authService.takediseasename(this.a);
    setTimeout(() => {
      this.router.navigate(['/result']); // Redirect to login view
    }, 1000);
  }


  ngOnInit() {
	  this.view_b = false;
    this.authService.getAllDisease().subscribe(response => {
      this.diseaseAutoComplete = response;
      this.states = this.diseaseAutoComplete.map(function(item) {
        return item['name'];
      });
    });
    this.id = this.authService.sendId();
	if (this.id == null){
		this.router.navigate(['/home']);
	}
  }
}
