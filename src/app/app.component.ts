import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mythic';
  data = [] as any;
  roles: undefined;
  loggedUser: undefined;
  loginbtn: boolean;
  logoutbtn: boolean;
  name: any;
  isConnected1 = false;

  constructor(private http: HttpClient, private dataService: ApiService,
    private router:Router) {

    dataService.getLoggedInName.subscribe((name): void => {
      return this.changeName(name);
    });
    if (this.dataService.isLoggedIn()) {
      console.log("loggedin");
      this.loginbtn = false;
      this.logoutbtn = true
    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false
    }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        if (this.router.url.includes('/accueil-connect')) {
          this.isConnected1 = true;
        } else {
          this.isConnected1 = false;
        }
      }
      return;
    });
  }

  ngOnInit(): void {
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }


}


