import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: any;

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}