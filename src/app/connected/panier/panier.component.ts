import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  items = this.api.getItems();
  constructor(private api : PanierService,
    private http: HttpClient) {}

  data = [] as any;


  ngOnInit(): void {
    // this.http.get('http://localhost/panier.php').subscribe(data => {
    // this.data.push(data);
    // console.log(this.data);
    // }, error => console.error(error));
  }

  deleteRow(p: any){
    const index = this.items.indexOf(p);
    this.items.splice(index, 1);
  }

  clearCart() {
    this.api.clearCart();
  }

  deleteLine (donnee : any) {
    console.log(donnee)
    this.http.get('http://localhost/delete_panier.php').subscribe(data => {
    donnee.push(data);
    console.log(donnee);
    }, error => console.error(error));
  }
}
