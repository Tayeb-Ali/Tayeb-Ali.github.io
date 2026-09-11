import { Component, ElementRef, afterNextRender, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  private host = inject(ElementRef<HTMLElement>);

  gauges = [
    { name: 'PHP', pct: 100 },
    { name: 'Laravel', pct: 90 },
    { name: 'TypeScript', pct: 90 },
    { name: 'Java · Spring Boot', pct: 85 },
    { name: 'Angular', pct: 80 },
    { name: 'Express.js', pct: 90 },
    { name: 'Go', pct: 75 },
    { name: 'C# · ASP.NET Core', pct: 85 },
  ];

  constructor() {
    afterNextRender(() => {
      const el = this.host.nativeElement;
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect();
            el.classList.add('filled');
          }
        },
        { threshold: 0.2 }
      );
      io.observe(el);
    });
  }
}