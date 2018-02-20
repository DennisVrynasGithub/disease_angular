import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  form: FormGroup;
  sYMPTOM: Array<any>;
  sYMPTOMS: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
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
      ])],
      symptom1: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15) // Maximum length is 15 characters
      ])]
    });
  }

  // OneDisease call
  onSymptomSubmit() {
    // Function from authentication service to
    this.authService.getSymptom(this.form.get('symptom').value).subscribe(response => {
      this.sYMPTOM = response
    })
  }

  //all disease call
  onTwoSymptomSubmit() {
    const user = {
      symptom: this.form.get('symptom').value, // Username input field
      symptom1: this.form.get('symptom1').value
    };
    // Function from authentication service to
    this.authService.getSymptomTwo(user).subscribe(response => {
      this.sYMPTOMS = response
    })
  }

  ngOnInit() {
  }

}
