import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connexion-pro',
  templateUrl: './connexion-pro.component.html',
  styleUrls: ['./connexion-pro.component.scss']
})
export class ConnexionProComponent implements OnInit {
  angForm: FormGroup;
  postId: any;
  baseUrl = 'http://localhost/api/';


  recup!: string;

  redirection!: number;

  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router, private http: HttpClient) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      mdp: ['', Validators.required]
    });

  }

  ngOnInit() { }
  get email() { return this.angForm.get('email'); }
  get mdp() { return this.angForm.get('mdp'); }

  getdata(angForm: { value: { email: any; mdp: any; }; }) {
    console.log('valeurs', JSON.stringify(angForm.value));

    this.http.get<any>('http://localhost/connexion_pro.php?email=' + angForm.value.email + '&mdp=' + angForm.value.mdp, {})
      .subscribe(data => {
        this.recup = data['nb']; // Permet de récupéré le nb de data dans le php 
        console.log(typeof data); // Permet de voir le type de l'élément 
        console.log(this.recup);

        this.redirection = parseInt(this.recup);
        if (this.redirection == 1) {
          this.goToPage('accueil-connect/pagelisteproduit/:id/:categorie/:epoque/:libelle_article/:description/:etat/:prix')
        }
        else {
          alert("Mauvais mot de passe ou email !")
        }
      }, error => console.error(error));

  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }


};