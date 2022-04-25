import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Produit } from 'src/app/produit';
import { PanierService } from 'src/app/panier.service';
@Component({
  selector: 'app-page-liste-produit',
  templateUrl: './page-liste-produit-connect.component.html',
  styleUrls: ['./page-liste-produit-connect.component.scss']
})
export class PageListeProduitConnectComponent implements OnInit {
  
  isSelected = false; //Booleén qui va afficher certaines valeurs
  path = "";
  message = "";

  public produit = {
    id_img: "" as any,
    categorie: "" as any,
    epoque: "" as any,
    libelle_article: "" as any,
    description: "" as any,
    etat: "" as any,
    prix: "" as any
  };

  data = [] as any;
  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private api: PanierService) {
    this.http.get(`http://${window.location.host}/article.php`).subscribe(data => {
      this.data.push(data);
      console.log(this.data);
    }, error => console.error(error));

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.produit.id_img = params.get('id');
      this.produit.categorie = params.get('categorie');
      this.produit.epoque = params.get('epoque');
      this.produit.libelle_article = params.get('libelle_article');
      this.produit.description = params.get('description');
      this.produit.etat = params.get('etat');
      this.produit.prix = params.get('prix');
    });
    console.log(this.isSelected)
  }


  navigateTo(row: any) {
    this.router.navigate(['/maintenance/data/' + row.id]);
  }

  categorie: Categorie[] = [
    { name: 'Armes' },
    { name: 'Vaisselles' },
    { name: 'Meubles' },
    { name: 'Armures' },
    { name: 'Décoration' },
    { name: 'Peinture' },
    { name: 'Sculpture' },
    { name: 'Divers' },
  ];
  epoque: Epoque[] = [
    { name: 'Antiquité' },
    { name: 'Moyen-Age' },
    { name: 'Rennaissance' },
    { name: 'Epoque Moderne' },
  ];

  drop(event: CdkDragDrop<Categorie[], Epoque[]>) {
    moveItemInArray(this.categorie, event.previousIndex, event.currentIndex);
    moveItemInArray(this.epoque, event.previousIndex, event.currentIndex);
  }

  selected() {
    this.isSelected = true;
  }

  notSelected() {
    this.isSelected = false;
  }

  //Vérifie si l'url contient "" et affiche le contenu selon l'url
  isSelectedPage() {
    if (this.router.url === '/accueil/pagelisteproduit/:id/:categorie/:epoque/:libelle_article/:description/:etat/:prix') {
      this.isSelected = false;
    } else {
      this.isSelected = true;
    }
  }
  
  //Ajouter un produit dans le panier
  addToCart(product: Produit) {
    product = {
      id_img: this.produit.id_img,
      categorie: this.produit.categorie,
      epoque: this.produit.epoque,
      libelle_article: this.produit.libelle_article,
      description: this.produit.description,
      etat: this.produit.etat,
      prix: this.produit.prix
    };
    this.api.addToCart(product);
  }

  getlink($adresse: string){
    let $adresse2 = `mythic.erwan-decoster.com`;
    return `http://${$adresse2}/${$adresse}`;
  }

}
export interface Categorie {
  name: string;
}

export interface Epoque {
  name: string;
}