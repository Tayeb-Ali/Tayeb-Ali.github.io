import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navIcon = false;
  age: any;
  month: any;
  days: any;

  constructor() {
  }

  ngOnInit(): void {
    var currentTime = new Date();
    this.days= currentTime.getDate() - 19;
    this.month = currentTime.getMonth() + 1  - 6;
    this.age = currentTime.getFullYear() - 1996;
  }


}
