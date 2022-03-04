import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-separation-inscription-user',
  templateUrl: './separation-inscription-user.component.html',
  styleUrls: ['./separation-inscription-user.component.scss']
})
export class SeparationInscriptionUserComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName : string):void {
    this.router.navigate([`${pageName}`])
  }

}
