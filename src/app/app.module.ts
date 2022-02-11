import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConnexionUserComponent } from './connexion-user/connexion-user.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilPartComponent } from './profil-part/profil-part.component';
import { ProfilProComponent } from './profil-pro/profil-pro.component';
import { PanierComponent } from './panier/panier.component';
import { PageProduitComponent } from './page-produit/page-produit.component';
import { PageListeProduitComponent } from './page-liste-produit/page-liste-produit.component';
import { BlocRechercheComponent } from './bloc-recherche/bloc-recherche.component';
import { NavBarConnectComponent } from './nav-bar-connect/nav-bar-connect.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConnexionUserComponent,
    ProfilPartComponent,
    ProfilProComponent,
    PanierComponent,
    PageProduitComponent,
    PageListeProduitComponent,
    BlocRechercheComponent,
    NavBarConnectComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
