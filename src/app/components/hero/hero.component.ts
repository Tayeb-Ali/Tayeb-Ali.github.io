import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TypedDirective } from '../../typed.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TypedDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  typedStrings = [
    'Freelancer.',
    'Full Stack Developer.',
    'Cryptocurrency trading expert.',
    'Expert in creating smart contracts.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
