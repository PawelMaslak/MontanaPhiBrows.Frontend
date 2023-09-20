import { Injectable } from '@angular/core';
import appEnMessages from 'src/assets/i18n/en.json';
import appDeMessages from 'src/assets/i18n/de.json';
import { TranslateService } from '@ngx-translate/core';
import { LocaleLookupItem } from '../shared/lookup-item';

@Injectable({
  providedIn: 'root'
})
export class LocalisationService {
  public locale: string;
  public localeFullName: string;
  private readonly localeStorageKey = 'app-locale';

  constructor(private readonly translateService: TranslateService) {
    this.locale = this.getLocale();
    this.localeFullName = this.getLocaleFullName();
  }

  public getLocale(): string {
    const locale = localStorage.getItem(this.localeStorageKey);
    return locale != null ? locale : 'en';
  }

  //Something wrong with this function.
  public getLocaleFullName(): string {
    return this.locales.find((locale) => locale.value)?.nativeName!;
  }

  public changeLocale(locale: string): void {
    this.setLocale(locale);
    this.setLocaleFullName();
    // It is necessary to reload the page each time you need to set new locale.
    // https://js.devexpress.com/Documentation/ApiReference/Common/Utils/localization/#localelocale
    parent.location.reload();
  }

  public setLocale(locale: string): void {
    this.locale = locale;
    localStorage.setItem(this.localeStorageKey, locale);
  }

  public setLocaleFullName(): void {
    let localeValue = localStorage.getItem('app-locale');
    var fullName = this.locales.find(x => x.value == localeValue)?.nativeName!;
    this.localeFullName = fullName;
  }

  public initMessages(): Promise<void> {
    return new Promise((resolve) => {
      try {
        this.translateService.setTranslation('en', appEnMessages);
        this.translateService.setTranslation('de', appDeMessages);

        this.translateService.use(this.locale);
      }
      catch (error) {
        console.log(error);
      }
    });
  }

  public get locales(): LocaleLookupItem[] {
    return [
      {
        nativeName: 'English',
        text: 'English - English',
        value: 'en',
      },
      {
        nativeName: 'Deutsch',
        text: 'Deutsch - German',
        value: 'de',
      }
    ];
  }
}


