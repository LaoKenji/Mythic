import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-ajout-offre',
  templateUrl: './ajout-offre.component.html',
  styleUrls: ['./ajout-offre.component.scss']
})

export class AjoutOffreComponent implements OnInit {

  angForm: FormGroup;
  postId: any;
  baseUrl = 'http://localhost/api/';


  favoriteSeason = '';
  seasons: string[] = ['Armes','Vaisselles','Meubles','Armures', 'Décoration','Peinture','Sculpture','Divers'];


  favoriteSeason2 = '';
  seasons2: string[] = ['Antiquité', 'Moyen-Age', 'Rennaissance', 'Epoque Moderne'];

  favoriteSeason3 = '';
  seasons3: string[] = ['Bon', 'Moyen', 'Mauvais'];

  recup!: string;
  redirection!: number;

  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router, private http: HttpClient) {
    this.angForm = this.fb.group({
      nom_article: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      prix: ['', Validators.required]
      
    });

    // const form = document.forms.namedItem;
    // const radios = form.elements.characters;

    // console.log(radios);
    

  }

  ngOnInit(): void {
    console.log(this.favoriteSeason2)
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

/* 
  drop(event: CdkDragDrop<Categorie[], Epoque[] >) {
    moveItemInArray(this.categorie, event.previousIndex, event.currentIndex);
    moveItemInArray(this.epoque, event.previousIndex, event.currentIndex);
 }
 */

 //récupere l'epoque du produit

 getValueRadioEpoque(epoquerecup : any) {
    this.favoriteSeason2 = epoquerecup.value;
    console.log(epoquerecup['value'])
  }

  getValueRadioCategorie(categorierecup: any){
    this.favoriteSeason = categorierecup.value;
    console.log(categorierecup['value'])
  }

  getValueRadioEtat(etatrecup: any){
    this.favoriteSeason3 = etatrecup.value;
    console.log(etatrecup['value'])
  }

  get nom_article() { return this.angForm.get('nom_article'); }
  get description() { return this.angForm.get('description'); } //récupére la description
  get prix() { return this.angForm.get('prix'); }//récupére le prix

 //Envoi données formulaire PHP (description, prix, categorie, epoque )
 getdata(angForm: { value: { description: any; prix: any; nom_article: any}; }) {
  console.log('valeurs', JSON.stringify(angForm.value), this.favoriteSeason ,this.favoriteSeason2, this.favoriteSeason3);
  this.http.get('http://localhost/ajout_article.php?description='+angForm.value.description+'&prix='+angForm.value.prix+'&epoque='+this.favoriteSeason2+'&categorie='+this.favoriteSeason+'&nom_article='+angForm.value.nom_article+'&etat='+this.favoriteSeason3,{})
  .subscribe((data) => {
  this.postId = data;
  console.log(this.postId); 
  },(error: any) => console.error(error));

}





//Envoie IMG au PHP pour l'enregistrer dans le fichier adéquat
/*   async function upload(type:id) {
    let FormData = new FormData();
    FormData.append('file', fileupload.files[0]);
    FormData.append('type', type);
    FormData.append('id', id);
    aswait fetch('php_traitement/ajout_img.php', {method: 'POST'})
    
  }

  goToPage(pageName : string):void {
    this.router.navigate([`${pageName}`])
  } */

}
export interface Categorie {
  name: string;
}
export interface Epoque {
  name: string;
}

