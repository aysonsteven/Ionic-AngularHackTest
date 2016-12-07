import { Component, OnInit } from '@angular/core';
import { User, MEMBER_LOGIN_DATA } from '../quiz-module/services/user.service';
import { AuthsessionService } from '../services/auth-session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor( public sessionSrvc: AuthsessionService, private user: User ) {
         
   }

  ngOnInit() {
  }

}
