import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  list_history: Array<any>;
  id;
  messageClass;
  message;
  view_alert: boolean = false;
  kati;
  
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

	view_alert_div(){
		return this.view_alert;
	}
			  
	close_alert(){
		this.view_alert = false;
	}
			  
	change_value(kati){
		this.kati = kati;
		this.view_alert = true;
	}
	
	delete_disease(){
		this.view_alert = false;
		this.authService.delete_disease_history(this.id,this.kati).subscribe(response => {
                  // Resposne from registration attempt
                  if (!response.success) {
                    this.messageClass = 'alert alert-danger'; // Set an error class
                    this.message = response.message; // Set an error message
                  }
                  else {
                    this.messageClass = 'alert alert-success'; // Set a success class
                    this.message = response.message; // Set a success message
                  }
                })
	}
	
  ngOnInit() {
	  this.id = this.authService.sendId();
	  this.authService.get_disease_history(this.id).subscribe(response => {
      this.list_history = response
    })
	if (this.id == null){
		this.router.navigate(['/home']);
	}
  }

}
