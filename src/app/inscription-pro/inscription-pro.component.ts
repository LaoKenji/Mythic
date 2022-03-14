import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User_pro } from './user_pro';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-inscription-pro',
  templateUrl: './inscription-pro.component.html',
  styleUrls: ['./inscription-pro.component.scss']
})
export class InscriptionProComponent implements OnInit {
  postId: any;
  data=[] as any;
  constructor(private router : Router, private http: HttpClient) { }
  
  public user_pro: User_pro = new User_pro();
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
    this.http.get<any>('http://localhost/create_user.php?email='+registerForm.value.email+'&siret='+registerForm.value.siret+
    '&mdp='+registerForm.value.mdp+'&nom_entreprise='+registerForm.value.nom_entreprise+"&code_ape="+registerForm.value.code_ape,{})
    .subscribe(data => {
    this.postId = data.id;
    console.log(this.data); 
    }, error => console.error(error));
  }
}
