import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User_part } from './inscription-user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inscription-user',
  templateUrl: './inscription-user.component.html',
  styleUrls: ['./inscription-user.component.scss']
})
export class InscriptionUserComponent implements OnInit {
  postId: any;
  data = [] as any;
  constructor(private router: Router, private http: HttpClient) { }

  public user_part: User_part = new User_part();
  
  ngOnInit() {
    this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
      this.postId = data.id;
    })
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }

  public SaveData(registerForm: NgForm) {
    console.log(registerForm.form);
    console.log('valeurs', JSON.stringify(registerForm.value));
    this.http.get<any>('http://localhost/create_user_part.php?email=' + registerForm.value.email + '&nom=' + registerForm.value.nom +
      '&prenom=' + registerForm.value.prenom + '&mdp=' + registerForm.value.mdp + '&localite=' + registerForm.value.localite + "&telephone=" + registerForm.value.telephone, {})
      .subscribe(data => {
        this.postId = data.id;
        console.log(this.data);
      }, error => console.error(error));
  }
}
