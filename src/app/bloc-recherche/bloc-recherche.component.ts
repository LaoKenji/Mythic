import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-bloc-recherche',
  templateUrl: './bloc-recherche.component.html',
  styleUrls: ['./bloc-recherche.component.scss']
})
export class BlocRechercheComponent implements OnInit {

  isConnected = false;

  constructor(private router : Router) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        if (this.router.url.includes('/accueil-connect')) {
          this.isConnected = true;
        } else {
          this.isConnected = false;
        }
      }
      return;
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        if (this.router.url.includes('/accueil-connect/pagelisteproduit/:id/:libelle_article/:etat/:prix')) {
          this.isConnected = true;
        } else {
          this.isConnected = false;
        }
      }
      return;
    });
    console.log(this.isConnected)
  }

  un() {
    this.isConnected = true;
  }

}