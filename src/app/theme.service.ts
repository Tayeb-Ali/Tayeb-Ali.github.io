import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

const KEY = 'eh-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private doc = inject(DOCUMENT);

  readonly dark = signal(false);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;
    const pre = this.doc.documentElement.classList.contains('dark-pre');
    const stored = this.doc.defaultView?.localStorage.getItem(KEY);
    const prefersDark =
      this.doc.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches ?? false;
    this.apply(stored ? stored === 'dark' : pre || prefersDark, false);
    this.doc.documentElement.classList.remove('dark-pre');
  }

  toggle(): boolean {
    const next = !this.dark();
    this.apply(next, true);
    return next;
  }

  private apply(dark: boolean, persist: boolean): void {
    this.dark.set(dark);
    this.doc.body.classList.toggle('dark-mode', dark);
    this.doc
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', dark ? '#22282f' : '#e0e5ec');
    if (persist) {
      this.doc.defaultView?.localStorage.setItem(KEY, dark ? 'dark' : 'light');
    }
  }
}
