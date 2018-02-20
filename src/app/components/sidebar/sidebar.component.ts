import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  open = true;

  constructor(
    public authService: AuthService
  ) {

  }

openclose(){
    this.open = !this.open;
    return this.open;
}


  ngOnInit() {

  }

}
