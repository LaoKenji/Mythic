import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: Produit[] = [];

  private messageSource = new BehaviorSubject('Panier vide');
  currentMessage = this.messageSource.asObservable()

  constructor() { }

  addToCart(product: Produit) {
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
