import { Component } from '@angular/core';

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
  constructor()
  {
  }
}
