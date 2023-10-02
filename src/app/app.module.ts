import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './core/pages/welcome/welcome.component';
import { ContactComponent } from './core/pages/contact/contact.component';
import { NavbarComponent } from './core/pages/navbar/navbar.component';
import { StoryComponent } from './core/pages/story/story.component';
import { ServicesComponent } from './core/pages/services/services.component';
import { ReviewsComponent } from './core/pages/reviews/reviews.component';
import { NavbarMobileComponent } from './core/pages/navbar/navbar-mobile/navbar-mobile.component';
import { NavbarDesktopComponent } from './core/pages/navbar/navbar-desktop/navbar-desktop.component';
import { FooterComponent } from './core/pages/footer/footer.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faInstagram,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

import {
  faMap
} from '@fortawesome/free-solid-svg-icons';
import { GalleryComponent } from './core/pages/gallery/gallery.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactComponent,
    NavbarComponent,
    StoryComponent,
    ServicesComponent,
    ReviewsComponent,
    NavbarMobileComponent,
    NavbarDesktopComponent,
    FooterComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faInstagram,
      faGoogle,
      faMap
    );
 }
}
