import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private navIcon = false;
  darkMode = false;

  langService = inject(LanguageService);
  private theme = inject(ThemeService);
  private platformId = inject(PLATFORM_ID);
  private doc = inject(DOCUMENT);

  get lang(): string {
    return this.langService.currentLang;
  }

  ngOnInit(): void {
    this.darkMode = this.theme.dark();
  }

  updateStyle(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const body = this.doc.getElementsByTagName('body')[0];
    if (this.navIcon) {
      this.navIcon = false;
      body.classList.remove('mobile-nav-active');
    } else {
      this.navIcon = true;
      body.classList.add('mobile-nav-active');
    }
  }

  switchLang(): void {
    this.langService.toggle();
  }

  switchDark(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.darkMode = this.theme.toggle();
  }
}
