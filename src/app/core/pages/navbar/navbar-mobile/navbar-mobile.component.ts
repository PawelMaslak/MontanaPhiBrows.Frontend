import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalisationService } from 'src/app/core/services/localisation.service';
import { LocaleLookupItem } from 'src/app/core/shared/lookup-item';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent {
  public languages: LocaleLookupItem[];
  public selectedLanguage: string;
  public selectedLanguageId: string;
  public localStorage: Storage;

  constructor(
    private readonly localisationService: LocalisationService
  ) {
    this.languages = this.localisationService.locales;
    this.selectedLanguage = this.localisationService.localeFullName;
    this.selectedLanguageId = this.localisationService.locale;
    this.localStorage = localStorage;
  }

  //It reloads the website before changing selected language value.
  public languageSelected(value: string): void {
    this.localisationService.changeLocale(value);
    this.selectedLanguage = this.localisationService.localeFullName;
    this.selectedLanguageId = this.localisationService.locale;
  }


  // Menu
  isMenuOpen = false;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
