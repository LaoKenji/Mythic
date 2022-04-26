import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
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
  baseUrl = `http://${window.location.host}/api/`;

  selectedFile: any;
  favoriteSeason = '';
  seasons: string[] = ['Armes', 'Vaisselles', 'Meubles', 'Armures', 'Décoration', 'Peinture', 'Sculpture', 'Divers'];


  favoriteSeason2: any;

  favoriteSeason3 = '';
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

    // const form = document.forms.namedItem;
    // const radios = form.elements.characters;

    // console.log(radios);


  }

  ngOnInit(): void {
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

  /* 
    drop(event: CdkDragDrop<Categorie[], Epoque[] >) {
      moveItemInArray(this.categorie, event.previousIndex, event.currentIndex);
      moveItemInArray(this.epoque, event.previousIndex, event.currentIndex);
   }
   */
  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }



  getValueRadioCategorie(categorierecup: any) {
    this.favoriteSeason = categorierecup.value;
    console.log(categorierecup['value'])
  }

  getValueRadioEtat(etatrecup: any) {
    this.favoriteSeason3 = etatrecup.value;
    console.log(etatrecup['value'])
  }

  //récupére l'article
  get nom_article() {
    return this.angForm.get('nom_article');
  }
  //récupére l'image
  get add_img() {
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
  getdata(angForm: { value: { description: any; prix: any; nom_article: any }; }) {
    console.log('valeurs', JSON.stringify(angForm.value), this.favoriteSeason, this.favoriteSeason2, this.favoriteSeason3);
    this.http.post('http://mythic.erwan-decoster.com/ajout_article.php?description=' + angForm.value.description + '&prix=' + angForm.value.prix + '&epoque=' + this.favoriteSeason2 + '&categorie=' + this.favoriteSeason + '&nom_article=' + angForm.value.nom_article + '&etat=' + this.favoriteSeason3, {})
      .subscribe((data) => {
        this.postId = data;
        console.log(this.postId);
      }, (error: any) => console.error(error));
    alert("Votre Produit à été ajouter !");
    this.router.navigate(["/accueil-connect/pagelisteproduit/:id/:categorie/:epoque/:libelle_article/:description/:etat/:prix"]);
  }

  //Envoie IMG au PHP pour l'enregistrer dans le fichier adéquat

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post(`http://mythic.erwan-decoster.com/ajout_img.php`, fd, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event);
      });
  }

  //Envoie IMG époque au PHP pour l'enregistrer dans le fichier adéquat
    //récupere l'epoque du produit

    getValueRadioEpoque(epoquerecup: any) {
      this.favoriteSeason2 = epoquerecup.value;
      console.log(epoquerecup['value']);
      
    }
    
}

export interface Categorie {
  name: string;
}
export interface Epoque {
  name: string;
}

