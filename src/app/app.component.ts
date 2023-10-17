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
    this.localisationService.initMessages();
  }
}
