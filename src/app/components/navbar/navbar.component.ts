import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [routerTransition()]
})
export class NavbarComponent implements OnInit {

  login_user;

  constructor(public authService: AuthService,
              private router: Router) {
  }

  onLogOutSubmit() {
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
  }

}
