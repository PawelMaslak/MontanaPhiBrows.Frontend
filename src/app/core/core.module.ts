/*!
 Copyright (c) 2023 by Bystronic Laser AG, CH-3362 Niederönz
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
    declarations: [
    WelcomeComponent,
    ContactComponent
  ],
    imports: [
        CommonModule,
        TranslateModule.forRoot(),
        ],
    exports: [TranslateModule],
})
export class CoreModule { }
