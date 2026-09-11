import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);
  private doc = inject(DOCUMENT);

  constructor() {
    this.translate.addLangs(['en', 'ar']);
    const browserLang = this.translate.getBrowserLang();
    this.use(browserLang === 'ar' ? 'ar' : 'en');
  }

  get currentLang(): string {
    return this.translate.currentLang() ?? 'en';
  }

  use(lang: 'en' | 'ar'): void {
    this.translate.use(lang).subscribe();
    if (isPlatformBrowser(this.platformId)) {
      this.doc.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  toggle(): void {
    this.use(this.currentLang === 'en' ? 'ar' : 'en');
  }
}
