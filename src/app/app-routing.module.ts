import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Nav Bar */
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionUserComponent } from '../app/connexion-user/connexion-user.component'
import { InscriptionUserComponent } from './inscription-user/inscription-user.component';
import { PanierComponent } from './panier/panier.component';
import { AjoutOffreComponent } from './ajout-offre/ajout-offre.component';
/*import { ProfilPartComponent } from './profil-part/profil-part.component';
import { ProfilProComponent } from './profil-pro/profil-pro.component';*/


import { PageListeProduitComponent } from './page-liste-produit/page-liste-produit.component';
import { PageProduitComponent } from './page-produit/page-produit.component';
import { FooterComponent } from './footer/footer.component';
import { SeparationInscriptionUserComponent } from './separation-inscription-user/separation-inscription-user.component';
import { InscriptionProComponent } from './inscription-pro/inscription-pro.component';

const routes: Routes = [
  {path: "accueil" , component: AccueilComponent },
  {path: "ajout_offre" , component: AjoutOffreComponent },
  {path: "connexion" , component: ConnexionUserComponent },
  {path: "inscription" , component: SeparationInscriptionUserComponent },
  {path: "pagelisteproduit", component: PageListeProduitComponent},
  {path: "connexion/pagelisteproduit", component: PageListeProduitComponent},
  {path: "page-produit", component: PageProduitComponent},
  {path: "panier", component: PanierComponent},
  {path: "footer", component: FooterComponent},
  {path: "inscription-part", component: InscriptionUserComponent},
  {path: "inscription-pro", component: InscriptionProComponent},
  /*{path: "profil-part", component: ProfilPartComponent},
  {path: "profil-pro", component: ProfilProComponent}*/
  {path: '**', redirectTo: 'accueil' }


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
