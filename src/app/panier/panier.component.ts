import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  items = this.api.getItems();
  message = '';
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.currentMessage.subscribe(message => this.message = message);

  }

  deleteRow(p: any){
    const index = this.items.indexOf(p);
    this.items.splice(index, 1);
}
}
