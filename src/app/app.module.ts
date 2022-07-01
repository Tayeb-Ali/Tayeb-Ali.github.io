import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {BlogComponent} from './components/blog/blog.component';
import {ContactComponent} from './components/contact/contact.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {FeedbackComponent} from './components/feedback/feedback.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HeroComponent} from './components/hero/hero.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NgxTypedJsModule} from "ngx-typed-js";
import {TestimonialsComponent} from './components/testimonials/testimonials.component';
import {ServicesComponent} from './components/services/services.component';
import {SkillsComponent} from './components/skills/skills.component';
import {FactsComponent} from './components/facts/facts.component';
import {ResumeComponent} from './components/resume/resume.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings} from "ng-recaptcha";
import {environment} from "../environments/environment";


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, 'http://mytranslations.com/i18n/');
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    FeedbackComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    TestimonialsComponent,
    ServicesComponent,
    SkillsComponent,
    FactsComponent,
    ResumeComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.recaptcha.siteKey,
    } as RecaptchaSettings,
  },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
