import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private navIcon = false;
  lang = 'ar';
  darkMode = false;

  constructor(public app: AppComponent) {
    this.lang = this.app.translate.currentLang;
  }

  ngOnInit(): void {
  }

  updateStyle() {
    if (this.navIcon) {
      this.navIcon = false
      let body = document.getElementsByTagName('body')[0];
      body.classList.remove('mobile-nav-active')
    } else {
      this.navIcon = true
      let body = document.getElementsByTagName('body')[0];
      body.classList.add('mobile-nav-active');
    }
  }

  switchLang() {
    if (this.app.translate.currentLang === 'en') {
      let body = document.getElementsByTagName('body')[0];
      body.dir = 'rtl'
      return this.app.translate.use('ar')
    } else {
      let body = document.getElementsByTagName('body')[0];
      body.dir = 'ltr'
      return this.app.translate.use('en')
    }

  }

  switchDark() {
    if (this.darkMode) {
      this.darkMode = false
      var element = document.body;
      element.classList.remove("dark-mode");
    } else {
      this.darkMode = true
      var element = document.body;
      element.classList.toggle("dark-mode");
    }
  }
}
