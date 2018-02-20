import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

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
  dISEASEletter: Array<any>;
  states: any =['autism','alabama','casxca'];


  constructor(
              private formBuilder: FormBuilder,
              private authService: AuthService
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

  // OneDisease call
  onDiseaseSubmit() {
    // Function from authentication service to
    this.authService.getDisease(this.form.get('disease').value).subscribe(response => {
      this.dISEASE = response
    })
  }

  onFindLetterSubmit() {
    console.log(this.letter);
    this.authService.getDiseaseFromLetter(this.letter).subscribe(response => {
      this.dISEASEletter = response
    })
  }

  findLetter(letter) {
    this.letter = letter;
    console.log(this.letter);
  }


  ngOnInit() {
    this.authService.getAllDisease().subscribe(response => {
      this.diseaseAutoComplete = response;
      this.states = this.diseaseAutoComplete.map(function(item) {
        return item['name'];
      });
    });
  }
}
