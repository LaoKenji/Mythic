import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-connect',
  templateUrl: './nav-bar-connect.component.html',
  styleUrls: ['./nav-bar-connect.component.scss']
})
export class NavBarConnectComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }

}
