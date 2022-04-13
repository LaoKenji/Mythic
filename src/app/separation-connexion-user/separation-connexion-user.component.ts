import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-separation-connexion-user',
  templateUrl: './separation-connexion-user.component.html',
  styleUrls: ['./separation-connexion-user.component.scss']
})
export class SeparationConnexionUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Navigue vers la page
  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }

}