import { Component, OnInit, afterNextRender, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { FactsComponent } from '../facts/facts.component';
import { SkillsComponent } from '../skills/skills.component';
import { ResumeComponent } from '../resume/resume.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
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
  showTop = false;

  private platformId = inject(PLATFORM_ID);
  private doc = inject(DOCUMENT);

  constructor() {
    afterNextRender(() => {
      const root = this.doc.querySelector('.page');
      if (!root) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add('in');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      root.querySelectorAll('section.skeuo .wrap, footer .wrap').forEach((el) => {
        el.classList.add('reveal');
        io.observe(el);
      });
      const onScroll = (): void => {
        this.showTop = (this.doc.defaultView?.scrollY ?? 0) > 600;
      };
      this.doc.defaultView?.addEventListener('scroll', onScroll, { passive: true });
    });
  }

  ngOnInit(): void {
    const currentTime = new Date();
    this.days = currentTime.getDate() - 19;
    this.month = currentTime.getMonth() + 1 - 6;
    this.age = currentTime.getFullYear() - 1996;
  }

  toTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.doc.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
