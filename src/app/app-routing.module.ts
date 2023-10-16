import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './core/pages/welcome/welcome.component';
import { ContactComponent } from './core/pages/contact/contact.component';
import { StoryComponent } from './core/pages/story/story.component';
import { ServicesComponent } from './core/pages/services/services.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'story', component: StoryComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
