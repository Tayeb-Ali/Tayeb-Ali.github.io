import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe],
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