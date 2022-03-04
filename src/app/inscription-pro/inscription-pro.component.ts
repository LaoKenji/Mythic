import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-pro',
  templateUrl: './inscription-pro.component.html',
  styleUrls: ['./inscription-pro.component.scss']
})
export class InscriptionProComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName : string):void {
    this.router.navigate([`${pageName}`])
  }

}
