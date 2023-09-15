import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './core/pages/welcome/welcome.component';
import { ContactComponent } from './core/pages/contact/contact.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
