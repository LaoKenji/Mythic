import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mythic';
  data = [] as any;
  isloggedIn!: boolean;
  roles: undefined;
  loggedUser: undefined;
  router: any;
  constructor(private http: HttpClient)
  {
    this.http.get('http://localhost/create_user.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data); 
    }, error => console.error(error));
  }
}
