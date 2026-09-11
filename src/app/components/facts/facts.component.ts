import {
  Component,
  ElementRef,
  WritableSignal,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

interface Stat {
  icon: string;
  target: number;
  labelKey: string;
  value: WritableSignal<number>;
  done: boolean;
}

@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css'],
})
export class FactsComponent {
  private host = inject(ElementRef<HTMLElement>);

  stats: Stat[] = [
    { icon: 'bx bx-happy', target: 25, labelKey: 'facts.Happy_Clients', value: signal(0), done: false },
    { icon: 'bx bx-book-content', target: 22, labelKey: 'facts.Projects', value: signal(0), done: false },
    { icon: 'bx bx-headphone', target: 11520, labelKey: 'facts.Hours_Support', value: signal(0), done: false },
    { icon: 'bx bx-award', target: 4, labelKey: 'facts.Awards', value: signal(0), done: false },
  ];

  constructor() {
    afterNextRender(() => {
      const el = this.host.nativeElement;
      const strip = el.querySelector('.dark-strip.stats') ?? el;
      const reduced =
        el.ownerDocument.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ??
        false;
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect();
            this.stats.forEach((s, i) => {
              if (reduced) {
                s.value.set(s.target);
                s.done = true;
              } else {
                window.setTimeout(() => this.countUp(s), i * 140);
              }
            });
          }
        },
        { threshold: 0.25 }
      );
      io.observe(strip);
    });
  }

  private countUp(s: Stat): void {
    if (s.done) return;
    s.done = true;
    const dur = 1400;
    const t0 = performance.now();
    const tick = (t: number): void => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      s.value.set(p === 1 ? s.target : Math.round(s.target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}