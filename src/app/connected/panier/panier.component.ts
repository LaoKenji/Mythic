import { Component, OnInit, SimpleChange } from '@angular/core';
import { PanierService } from 'src/app/panier.service';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  items = this.api.getItems();//Récupère les données du service c'est à dire les articles
  totalPrice = 0;//Prix du panier si panier vide
  constructor(private api: PanierService) { }

  ngOnInit(): void {
    this.getTotalPrice();
  }
  
  //Fonction pour supprimer une ligne dans le panier
  deleteRow(p: any) {
    const index = this.items.indexOf(p);
    this.items.splice(index, 1);
  }

  //Supprimer tous les articles
  clearCart() {
    this.items = this.api.clearCart();
  }

  //Fonction pour avoir le prix total du panier
  getTotalPrice() {
    let sum: number = 0;
    this.items.forEach(a => sum += +a.prix);//Ajoute le prix de chaques produits dans le panier
    this.totalPrice = +sum.toFixed(2); //toFixed(2) sert à arrondir le prix au centième
  }

  //Fonction pour mettre à jour le prix du panier quand on enlève un produit
  valueChange(p: any) {
    this.totalPrice = this.totalPrice - p;
    this.totalPrice = +this.totalPrice.toFixed(2);
  }
} 
