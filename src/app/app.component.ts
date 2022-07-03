import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Elteyab Hassan';

  constructor(public translate: TranslateService) {

    this.loadScript();
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    if (browserLang == 'ar')
      translate.use('ar');
    else translate.use('en')

  }


  loadScript() {
    this.loadPurecounter()
    this.loadAos()
    this.loadBootstrap()
    this.loadGlightbox()
    this.loadIsotope()
    this.loadSwiper()
    this.loadMain()
  }

  public loadPurecounter() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = './assets/vendor/purecounter/purecounter.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  public loadAos() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = './assets/vendor/aos/aos.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  public loadBootstrap() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  public loadGlightbox() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = './assets/vendor/glightbox/js/glightbox.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  public loadIsotope() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = './assets/vendor/isotope-layout/isotope.pkgd.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  public loadSwiper() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = './assets/vendor/swiper/swiper-bundle.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
  public loadMain() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = './assets/js/main.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
