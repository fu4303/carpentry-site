import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faLinkedin, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarkerAlt, faEnvelope, faDesktop, faWrench, faStar } from '@fortawesome/free-solid-svg-icons';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FindUsComponent } from './components/find-us/find-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FindUsComponent,
    TestimonialsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule,
    FontAwesomeModule,
    Angular2ImageGalleryModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faFacebook, faLinkedin, faTwitter, faPinterest);
    library.add(faPhone, faMapMarkerAlt, faEnvelope, faDesktop, faWrench, faStar);
  }
}
