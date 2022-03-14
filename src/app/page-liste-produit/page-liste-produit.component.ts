import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-page-liste-produit',
  templateUrl: './page-liste-produit.component.html',
  styleUrls: ['./page-liste-produit.component.scss']
})
export class PageListeProduitComponent implements OnInit {
  
  isSelected = false;
  path = "";
  public produit = {  
    id: "" as any,   
    libelle_article: "" as any,   
    etat: "" as any,
    prix: "" as any  
   }; 
  data = [] as any;
  constructor(private http: HttpClient,
    private router : Router,
    private route : ActivatedRoute) {
    this.http.get('http://localhost/article.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.produit.id=params.get('id');
      this.produit.libelle_article=params.get('libelle_article');
      this.produit.etat=params.get('etat');
      this.produit.prix=params.get('prix');
    }); 
    
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
   if (this.isSelected = false) {
     this.isSelected = true;
   }
 }

 notSelected () {
  if (this.isSelected = true) {
    this.isSelected = false;
  }
 }


}
export interface Categorie {
  name: string;
}

export interface Epoque {
  name: string;
}