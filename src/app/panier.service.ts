import { Injectable } from '@angular/core';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  items: Produit[] = [];

  constructor() { }
  addToCart(product: Produit) {
    localStorage.setItem("product", JSON.stringify(product));
    console.log(localStorage.getItem("product"));
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
