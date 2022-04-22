import { AccueilConnectComponent } from './connected/accueil_connect/accueil_connect.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Nav Bar */
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionUserComponent } from './inscription-user/inscription-user.component';
import { PanierComponent } from './connected/panier/panier.component';
import { AjoutOffreComponent } from './connected/ajout-offre/ajout-offre.component';
/*import { ProfilPartComponent } from './profil-part/profil-part.component';
import { ProfilProComponent } from './profil-pro/profil-pro.component';*/


import { PageListeProduitComponent } from './page-liste-produit/page-liste-produit.component';
import { FooterComponent } from './footer/footer.component';
import { SeparationInscriptionUserComponent } from './separation-inscription-user/separation-inscription-user.component';
import { InscriptionProComponent } from './inscription-pro/inscription-pro.component';
import { SeparationConnexionUserComponent } from './separation-connexion-user/separation-connexion-user.component';
import { ConnexionProComponent } from './connexion-pro/connexion-pro.component';


import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './auth.guard';
import { PageListeProduitConnectComponent } from './connected/page-liste-produit-connect/page-liste-produit-connect.component';


const routes: Routes = [
  { path: "accueil", component: AccueilComponent },
  { path: "accueil-connect/ajout_offre", component: AjoutOffreComponent },
  { path: "connexion", component: SeparationConnexionUserComponent },
  { path: "inscription", component: SeparationInscriptionUserComponent },
  { path: "pagelisteproduit/:id/:categorie/:epoque/:libelle_article/:description/:etat/:prix", component: PageListeProduitComponent },
  { path: "accueil-connect/pagelisteproduit/:id/:categorie/:epoque/:libelle_article/:description/:etat/:prix", component: PageListeProduitConnectComponent },
  { path: "accueil-connect/panier", component: PanierComponent },
  { path: "footer", component: FooterComponent },
  { path: "inscription-part", component: InscriptionUserComponent },
  { path: "inscription-pro", component: InscriptionProComponent },
  { path: "connexion-pro", component: ConnexionProComponent },
  /*{path: "profil-part", component: ProfilPartComponent},
  {path: "profil-pro", component: ProfilProComponent}*/

  { path: "accueil-connect", component: AccueilConnectComponent },
  { path: "connexion-part", component: LoginComponent },


  { path: '**', redirectTo: 'pagelisteproduit/:id/:categorie/:epoque/:libelle_article/:description/:etat/:prix' },
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
