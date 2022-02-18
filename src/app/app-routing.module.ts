import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ConnexionUserComponent } from '../app/connexion-user/connexion-user.component'
import { RouterModule, Routes } from '@angular/router';
import { InscriptionUserComponent } from './inscription-user/inscription-user.component';
import { PageListeProduitComponent } from './page-liste-produit/page-liste-produit.component';
/*import { PageProduitComponent } from './page-produit/page-produit.component';
import { PanierComponent } from './panier/panier.component';
import { ProfilPartComponent } from './profil-part/profil-part.component';
import { ProfilProComponent } from './profil-pro/profil-pro.component';*/



const routes: Routes = [
  {path: "connexion" , component: ConnexionUserComponent },
  {path: "inscription" , component: InscriptionUserComponent },
  {path: "pagelisteproduit", component: PageListeProduitComponent},
  /*{path: "page-produit", component: PageProduitComponent},
  {path: "panier", component: PanierComponent},
  {path: "profil-part", component: ProfilPartComponent},
  {path: "profil-pro", component: ProfilProComponent}*/


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
