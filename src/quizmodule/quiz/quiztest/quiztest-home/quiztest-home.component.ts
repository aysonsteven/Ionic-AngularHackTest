import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiztest-home',
  templateUrl: './quiztest-home.component.html'
})
export class QuiztestHomeComponent implements OnInit {
  inputErrorCheck:string;
  constructor( private router: Router ) { }
  ngOnInit() {
  }

  onClickProceed(){    

    this.router.navigate(['game']);
    
  }

  onClickShowScore(){
    this.router.navigate(['logs']);
  }

}
