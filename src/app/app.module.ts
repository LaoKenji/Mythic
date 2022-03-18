import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule} from '@angular/material/chips';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {  MatTableModule } from '@angular/material/table';


import { InscriptionUserComponent } from './inscription-user/inscription-user.component';
import { BlocRechercheComponent } from './bloc-recherche/bloc-recherche.component';
import { PageListeProduitComponent } from './page-liste-produit/page-liste-produit.component';
import { PageProduitComponent } from './page-produit/page-produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutOffreComponent } from './ajout-offre/ajout-offre.component';
import { FooterComponent } from './footer/footer.component';
import { SeparationInscriptionUserComponent } from './separation-inscription-user/separation-inscription-user.component';
import { SeparationConnexionUserComponent } from './separation-connexion-user/separation-connexion-user.component';
import { InscriptionProComponent } from './inscription-pro/inscription-pro.component';
import { FormsModule } from '@angular/forms';
import { ConnexionProComponent } from './connexion-pro/connexion-pro.component';
import { ConnexionUserComponent } from './connexion-user/connexion-user.component';
import { NavBarConnectComponent } from './nav-bar-connect/nav-bar-connect.component';
import { PanierComponent } from './panier/panier.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConnexionProComponent,
    NavBarConnectComponent,
    ConnexionUserComponent,
    InscriptionUserComponent,
    BlocRechercheComponent,
    PageListeProduitComponent,
    PageProduitComponent,
    AccueilComponent,
    AjoutOffreComponent,
    FooterComponent,
    SeparationInscriptionUserComponent,
    InscriptionProComponent,
    ConnexionUserComponent,
    SeparationConnexionUserComponent,
    PanierComponent,

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatChipsModule,
    BrowserModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    CommonModule

  ],

  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})



export class AppModule { }

