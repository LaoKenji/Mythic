import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Produit } from '../produit';
@Component({
  selector: 'app-page-liste-produit',
  templateUrl: './page-liste-produit.component.html',
  styleUrls: ['./page-liste-produit.component.scss']
})
export class PageListeProduitComponent implements OnInit {
  
  isSelected = false;
  path = "";
  message = "";

  public produit = {  
    id: "" as any,   
    libelle_article: "" as any,   
    etat: "" as any,
    prix: "" as any  
  };

  data = [] as any;
  constructor(private http: HttpClient,
    private router : Router,
    private route : ActivatedRoute,
    private api : ApiService) {
    this.http.get('http://localhost/article.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error));

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        if (this.router.url !== '/pagelisteproduit/:id/:libelle_article/:etat/:prix') {
          this.isSelected = true;
        }
        if (this.router.url === '/pagelisteproduit/:id/:libelle_article/:etat/:prix') {
          this.isSelected = false;
        }
      }
      return;
  });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.produit.id=params.get('id');
      this.produit.libelle_article=params.get('libelle_article');
      this.produit.etat=params.get('etat');
      this.produit.prix=params.get('prix');
    });
    this.isSelectedPage();
    this.api.currentMessage.subscribe(message => this.message = message)
  }


  navigateTo(row: any) {
    this.router.navigate(['/maintenance/data/'+row.id]);
  } 



  categorie: Categorie[] = [
    {name: 'Armes'},
    {name: 'Vaisselles'},
    {name: 'Meubles'},
    {name: 'Armures'},
    {name: 'Décoration'},
    {name: 'Peinture'},
    {name: 'Sculpture'},
    {name: 'Divers'},
  ];
  epoque: Epoque[] = [
    {name: 'Antiquité'},
    {name: 'Moyen-Age'},
    {name: 'Rennaissance'},
    {name: 'Epoque Moderne'},
  ];

  drop(event: CdkDragDrop<Categorie[], Epoque[] >) {
    moveItemInArray(this.categorie, event.previousIndex, event.currentIndex);
    moveItemInArray(this.epoque, event.previousIndex, event.currentIndex);
  }

  selected() {
    this.isSelected = true;
    console.log(this.isSelected);
  }

  notSelected () {
    this.isSelected = false;
    console.log(this.isSelected);
  }

  isSelectedPage() {
    if (this.router.url === '/pagelisteproduit/:id/:libelle_article/:etat/:prix') {
      this.isSelected = false;
    } else {
      this.isSelected = true;
    }
  }

  addToCart(product: Produit) {
    product = {
      id : this.produit.id,
      libelle_article : this.produit.libelle_article,
      etat : this.produit.etat,
      prix : this.produit.prix
    };
    this.api.addToCart(product);
    window.alert('Your product has been added to the cart!');
    console.log(product);
  }

}
export interface Categorie {
  name: string;
}

export interface Epoque {
  name: string;
}