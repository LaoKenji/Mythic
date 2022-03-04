import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion-user',
  templateUrl: './connexion-user.component.html',
  styleUrls: ['./connexion-user.component.scss']
})
export class ConnexionUserComponent implements OnInit {

  constructor( public router : Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName : string):void {
    this.router.navigate([`${pageName}`])
    console.log("ALLER LA")
  }

}
