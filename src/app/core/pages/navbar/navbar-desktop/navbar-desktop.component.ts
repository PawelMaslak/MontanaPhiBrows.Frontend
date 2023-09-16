import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LocalisationService } from 'src/app/core/services/localisation.service';
import { LocaleLookupItem } from 'src/app/core/shared/lookup-item';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss']
})
export class NavbarDesktopComponent {
  public languages: LocaleLookupItem[];
  public selectedLanguage: string;
  public selectedLanguageId: string;

  constructor(
    private readonly localisationService: LocalisationService
  ) {
    this.languages = this.localisationService.locales;
    this.selectedLanguage = this.localisationService.getLocaleFullName();
    this.selectedLanguageId = this.localisationService.locale;

    console.log(this.languages);
    console.log(this.selectedLanguage);
    console.log(this.selectedLanguageId);
  }

  public languageSelected(value: string): void {
    this.localisationService.changeLocale(value);
    this.selectedLanguage = this.localisationService.getLocaleFullName();
  }
}
