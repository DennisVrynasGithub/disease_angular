import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;
  name;
  y: Array<any>;
  yid;
  yid2;
  id;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }


  ngOnInit() {
    this.name = this.authService.sendEmail();
    this.authService.take_user_id(this.name).subscribe(response => {

      this.y = response;
      this.yid = Object.keys(this.y).map(k => this.y[k])
      this.yid2 = this.yid[0].toString();
      this.authService.takeId(this.yid2);
	  this.id = this.authService.sendId();
	this.id = this.authService.sendId();
	if (this.id == null){
		this.router.navigate(['/home']);
	}
    })
  }
}
