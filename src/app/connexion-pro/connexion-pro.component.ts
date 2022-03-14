import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion-pro',
  templateUrl: './connexion-pro.component.html',
  styleUrls: ['./connexion-pro.component.scss']
})
export class ConnexionProComponent implements OnInit {

  constructor( public router : Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName : string):void {
    this.router.navigate([`${pageName}`])
    console.log("ALLER LA")
  }

}