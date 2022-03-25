import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Connexion_user_part } from './connexion_user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-connexion-user',
  templateUrl: './connexion-user.component.html',
  styleUrls: ['connexion-user.component.scss']
})
export class ConnexionUserComponent implements OnInit {

  postId: any;
  data=[] as any;

  constructor(private router : Router, private http: HttpClient) { }
  
  public connexion_user_part: Connexion_user_part = new Connexion_user_part();
  ngOnInit() {
    this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
        this.postId = data.id;
  })
}

  goToPage(pageName : string):void {
    this.router.navigate([`${pageName}`])
  }

  public SaveData(registerForm: NgForm){
    console.log(registerForm.form);
    console.log('valeurs', JSON.stringify(registerForm.value));
    this.http.get<any>('http://localhost/connexion_user.php?email='+registerForm.value.email+'&mdp='+registerForm.value.mdp,{})
    .subscribe(data => {
    this.postId = data.id;
    console.log(this.data); 
    }, error => console.error(error));
  }

/*   getToken(){
    return localStorage.getItem('token')
  } */

}
