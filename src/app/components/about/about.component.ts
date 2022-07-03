import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  age: any;
  month: any;
  days: any;

  constructor() {
  }

  ngOnInit(): void {
    const currentTime = new Date();
    this.days = currentTime.getDate() - 19;
    this.month = currentTime.getMonth() + 1 - 6;
    this.age = currentTime.getFullYear() - 1996;
  }

}
