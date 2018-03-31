import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-last-result',
  templateUrl: './last-result.component.html',
  styleUrls: ['./last-result.component.css']
})
export class LastResultComponent implements OnInit {

  sum=0;
  showresult;
  showresult2;
  showresult3;
  id;

  constructor(private authService: AuthService,
              private router: Router) { }

  
  viewresult(){
    return this.showresult;
  }

  viewresult2(){
    return this.showresult2;
  }

  viewresult3(){
    return this.showresult3;
  }
  
  
  ngOnInit() {
	  this.sum = this.authService.loadSum();
	  
	 if (this.sum>=0 && this.sum<=20){
      this.showresult =true;
    }else if (this.sum>=21 && this.sum<=40){
      this.showresult2 =true;
    }else{
      this.showresult3 =true;
    }
this.id = this.authService.sendId();
	if (this.id == null){
		this.router.navigate(['/home']);
	}	
  } 

}
