import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

id;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
	this.id = this.authService.sendId();
	if (this.id == null){
		this.router.navigate(['/home']);
	}
  }

}
