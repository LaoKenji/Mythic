import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';
import { HttpClient,HttpHeaders, HttpEvent} from '@angular/common/http';
import { ApiService } from '../../api.service';
import { TestBed } from '@angular/core/testing';



@Component({
  selector: 'app-ajout-offre',
  templateUrl: './ajout-offre.component.html',
  styleUrls: ['./ajout-offre.component.scss']
})

export class AjoutOffreComponent implements OnInit {

  angForm: FormGroup;
  postId: any;
  baseUrl = 'http://localhost/api/';

  selectedFile: any;
  categorieprod = '';
  seasons: string[] = ['Armes','Vaisselles','Meubles','Armures', 'Décoration','Peinture','Sculpture','Divers'];


  epoqueprod = '';
  seasons2: string[] = ['Antiquité', 'Moyen-Age', 'Rennaissance', 'Epoque Moderne'];

  etat = '';
  seasons3: string[] = ['Bon', 'Moyen', 'Mauvais'];

  recup!: string;
  redirection!: number;

  recupimg: any;

  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router, private http: HttpClient) {
    this.angForm = this.fb.group({
      nom_article: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      prix: ['', Validators.required]
      
    });    

  }

  ngOnInit(): void {
  }
  //affiche la liste des catégories et des époques pour les sélectionnées dan les boutons radios
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

  goToPage(pageName : string):void {
    this.router.navigate([`${pageName}`])
  }

  /************ récupére l'information des boutons radios **********/

    //récupere l'epoque du produit
 getValueRadioEpoque(epoquerecup: any) {
   this.epoqueprod = epoquerecup.value;
   console.log(epoquerecup['value'])
 }
    //récupere la catégorie du produit
 getValueRadioCategorie(categorierecup: any) {
   this.categorieprod = categorierecup.value;
   console.log(categorierecup['value'])
 }
    //récupere l'etat du produit
 getValueRadioEtat(etatrecup: any) {
   this.etat = etatrecup.value;
   console.log(etatrecup['value'])
 }

  /************ récupére l'information du formulaire **********/
    //récupére le nom de l'article
 get nom_article() {
   return this.angForm.get('nom_article');
 }
    //récupére l'image
 get add_img(){
    return this.angForm.get('add_img');
 }
    //récupére la description
 get description() {
   return this.angForm.get('description');
 } 
    //récupére le prix
 get prix() {
   return this.angForm.get('prix');
 } 

 

 //Envoi données formulaire PHP (description, prix, categorie, epoque )
 getdata(angForm: {value: {description: any;prix: any;nom_article: any};}) {
   console.log('valeurs', JSON.stringify(angForm.value), this.epoqueprod, this.categorieprod, this.etat);
   this.http.get('http://localhost/ajout_article.php?description=' + angForm.value.description + '&prix=' + angForm.value.prix + '&epoque=' + this.epoqueprod + '&categorie=' + this.categorieprod + '&nom_article=' + angForm.value.nom_article + '&etat=' + this.etat, {})
     .subscribe((data) => {
       this.postId = data;
       console.log(this.postId);
     }, (error: any) => console.error(error));
     alert("Votre Produit a été ajouter !");
 }


 
//Envoie IMG au PHP pour l'enregistrer dans le fichier adéquat
  
  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost/ajout_img.php',fd,{
      reportProgress: true,
      observe: 'events'
    })
    .subscribe(event=>{
      console.log(event);
    });
  }


}

export interface Categorie {
  name: string;
}
export interface Epoque {
  name: string;
}

