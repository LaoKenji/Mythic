import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SimpleChange } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PanierService } from 'src/app/panier.service';
import { Produit } from 'src/app/produit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  items = this.api.getItems();
  totalPrice = 0;
  constructor(private api : PanierService,
    private http: HttpClient) {}


  ngOnInit(): void {
    // this.http.get('http://localhost/panier.php').subscribe(data => {
    // this.data.push(data);
    // console.log(this.data);
    // }, error => console.error(error));
    this.getTotalPrice();
  }

  deleteRow(p: any){
    const index = this.items.indexOf(p);
    this.items.splice(index, 1);
  }

  clearCart() {
    this.api.clearCart();
  }


  getTotalPrice () {
    let sum: number = 0;
    this.items.forEach(a => sum += +a.prix);
    this.totalPrice = sum;
  }

  valueChange(p : any) {
    this.totalPrice = this.totalPrice - p;
    console.log(this.totalPrice);
  }
} 
