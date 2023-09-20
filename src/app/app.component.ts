import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalisationService } from './core/services/localisation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly localisationService: LocalisationService
  ) {
    // localStorage.setItem('selectedLanguage', 'en');

    // translate.addLangs(['en', 'de']);
    // translate.setDefaultLang('en');

    // const browserLang = translate.getBrowserLang();

    // //const language = JSON.parse(localStorage.getItem('selectedLanguage') as string);
    // console.log(localStorage.getItem('selectedLanguage'));

    // //translate.use(language);
  }
}
