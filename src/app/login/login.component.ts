import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  postId: any;
  baseUrl = 'http://localhost/api/';


  toto = [];

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router, private http: HttpClient) {
  this.angForm = this.fb.group({
  email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
  mdp: ['', Validators.required]
  });
  
}

ngOnInit() {

}
get email() { return this.angForm.get('email'); }
get mdp() { return this.angForm.get('mdp'); }




  getdata(angForm: { value: { email: any; mdp: any; }; })
  {
  /*   console.log(this.angForm.value.email);
    console.log(this.angForm.value.mdp); */

    /* console.log(angForm.value); */
    console.log('valeurs', JSON.stringify(angForm.value));
        
    this.http.get<any>('http://localhost/login.php?email='+angForm.value.email+'&mdp='+angForm.value.mdp,{})
    .subscribe($data => {
      /* this.postId = data.id; */
      this.toto = $data;
    },error => console.error(error));
    console.log(this.toto);
      
  }

  /*   if($data == 1){
      console.log("Il est inscrit");
    }
    else{
      console.log("Il n'est pas inscrit");
    } */

    
  /*       var req = new XMLHttpRequest();
        req.onload = function(){
        console.log(this.responseText);
        req.send();
        req.open("get","http://localhost/login.php",true); */
      
    };
    

  /* if ($data == 1){
      this.dataService.userlogin(angForm1.value.email,angForm1.value.mdp).pipe(first()).subscribe((data: any) => {
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'http://localhost:4200/#/connected/accueil';
        this.router.navigate([redirect]);
    }
  }
  else{
    alert("User name or password is incorrect")
  }
  
}; */

/* isLogged(){
  this.VerifLogged();
}
VerifLogged(){
  if (this.email !=='' && this.mdp !== ''){
    axios.post('http://localhost/login.php',({
      action: 'verif_login',
      email: this.angForm.get('email'),
      mdp: this.angForm.get('mdp'),
    })).then((response)=> {
        console.log(response);
    })
  }
} */