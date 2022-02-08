import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConnexionUserComponent } from './connexion-user/connexion-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConnexionUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
