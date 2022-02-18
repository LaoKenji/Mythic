import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConnexionUserComponent } from './connexion-user/connexion-user.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule} from '@angular/material/chips'
import {DragDropModule} from '@angular/cdk/drag-drop';

import { InscriptionUserComponent } from './inscription-user/inscription-user.component';
import { BlocRechercheComponent } from './bloc-recherche/bloc-recherche.component';
import { PageListeProduitComponent } from './page-liste-produit/page-liste-produit.component';
import { PageProduitComponent } from './page-produit/page-produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutOffreComponent } from './ajout-offre/ajout-offre.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConnexionUserComponent,
    InscriptionUserComponent,
    BlocRechercheComponent,
    PageListeProduitComponent,
    PageProduitComponent,
    AccueilComponent,
    AjoutOffreComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatChipsModule,
    DragDropModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }

