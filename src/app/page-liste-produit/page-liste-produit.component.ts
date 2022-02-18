import { Component, OnInit } from '@angular/core';
import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-page-liste-produit',
  templateUrl: './page-liste-produit.component.html',
  styleUrls: ['./page-liste-produit.component.scss']
})
export class PageListeProduitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  categorie: Categorie[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  drop(event: CdkDragDrop<Categorie[]>) {
    moveItemInArray(this.categorie, event.previousIndex, event.currentIndex);
 }



}

export interface Categorie {
  name: string;
}



