import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

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
  router: any;
  loginbtn: boolean;
  logoutbtn: boolean;
  name: any;



  constructor(private http: HttpClient, private dataService: ApiService) {
    /* this.http.get('http://localhost/create_user.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data); 
    }, error => console.error(error)); */

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

  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }
}


