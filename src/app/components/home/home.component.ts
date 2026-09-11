import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { FactsComponent } from '../facts/facts.component';
import { SkillsComponent } from '../skills/skills.component';
import { ResumeComponent } from '../resume/resume.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css', './home.component.css'],
})
export class HomeComponent implements OnInit {
  navIcon = false;
  age: number | undefined;
  month: number | undefined;
  days: number | undefined;

  constructor() {}

  ngOnInit(): void {
    const currentTime = new Date();
    this.days = currentTime.getDate() - 19;
    this.month = currentTime.getMonth() + 1 - 6;
    this.age = currentTime.getFullYear() - 1996;
  }
}
