import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  open = true;
login_user;
id;

  constructor(
    public authService: AuthService,
              private router: Router
  ) {
 
  }

openclose(){
    //this.open = !this.open;
    //return this.open;
	this.login_user = false;
    // Function to store user's token in client local storage
    this.authService.storeUserLoginData(this.login_user);
	// After 2 seconds, redirect to dashboard page
    setTimeout(() => {
      // Check if user was redirected or logging in for first time
      this.router.navigate(['/home']); // Navigate to dashboard view
    }, 1000);
}

  ngOnInit() {
    this.id = this.authService.sendId();
	if (this.id == null){
		this.login_user = false;
        // Function to store user's token in client local storage
        this.authService.storeUserLoginData(this.login_user);
	}
  }

}
