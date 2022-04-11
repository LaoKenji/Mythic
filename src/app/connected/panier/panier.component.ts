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
  totalPrice = 0;//Prix du panier si panier vide
  constructor(private api: PanierService,
    private http: HttpClient) { }


  ngOnInit(): void {
    this.getTotalPrice();
  }
  
  //Fonction pour supprimer une ligne dans le panier
  deleteRow(p: any) {
    const index = this.items.indexOf(p);
    this.items.splice(index, 1);
  }

  clearCart() {
    this.api.clearCart();
  }

  //Fonction pour avoir le prix total du panier
  getTotalPrice() {
    let sum: number = 0;
    this.items.forEach(a => sum += +a.prix);
    this.totalPrice = +sum.toFixed(2); //toFixed(2) sert à arrondir le prix au centième

  }

  //Fonction pour mettre à jour le prix du panier quand on enlève un produit
  valueChange(p: any) {
    this.totalPrice = this.totalPrice - p;
    this.totalPrice = +this.totalPrice.toFixed(2);
  }
} 
