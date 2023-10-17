import { Component } from '@angular/core';
import { LocalisationService } from 'src/app/core/services/localisation.service';
import { LocaleLookupItem } from 'src/app/core/shared/lookup-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent {
  public languages: LocaleLookupItem[];
  public selectedLanguage: string;
  public selectedLanguageId: string;
  public availableLanguages: LocaleLookupItem[];
  public localStorage: Storage;

  constructor(
    private readonly localisationService: LocalisationService,
    private readonly router: Router
  ) {
    this.languages = this.localisationService.locales;
    this.selectedLanguage = this.localisationService.localeFullName;
    this.selectedLanguageId = this.localisationService.locale;
    this.localStorage = localStorage;
    this.availableLanguages = this.getDropdownListItems();
  }

  //It reloads the website before changing selected language value.
  public languageSelected(value: string): void {
    this.localisationService.changeLocale(value);
    this.selectedLanguage = this.localisationService.localeFullName;
    this.selectedLanguageId = this.localisationService.locale;
  }

  private getDropdownListItems(): LocaleLookupItem[] {
    return this.languages.filter(language => language.value != this.selectedLanguageId);
  }

  // Menu
  isMenuOpen = false;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigate(component: string): void {
    this.toggleMenu();
    this.router.navigate(['/' + component]);
  }
}
