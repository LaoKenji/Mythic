import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-user',
  templateUrl: './inscription-user.component.html',
  styleUrls: ['./inscription-user.component.scss']
})
export class InscriptionUserComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName : string):void {
    this.router.navigate([`${pageName}`])
    console.log("ALLER LA")
  }

}
