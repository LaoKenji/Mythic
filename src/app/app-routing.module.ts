import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionUserComponent } from '../app/connexion-user/connexion-user.component'
import { RouterModule, Routes } from '@angular/router';
import { InscriptionUserComponent } from './inscription-user/inscription-user.component';
import { PageListeProduitComponent } from './page-liste-produit/page-liste-produit.component';

const routes: Routes = [
  {path: "connexion" , component: ConnexionUserComponent },
  {path: "inscription" , component: InscriptionUserComponent },
  {path: "pagelisteproduit", component: PageListeProduitComponent}


];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
