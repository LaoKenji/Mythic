import { Component, OnInit } from '@angular/core';
import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-ajout-offre',
  templateUrl: './ajout-offre.component.html',
  styleUrls: ['./ajout-offre.component.scss']
})
export class AjoutOffreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categorie: Categorie[] = [
    {name: 'Armes'},
    {name: 'Vaisselles'},
    {name: 'Meubles'},
    {name: 'Armures'},
    {name: 'Décoration'},
    {name: 'Peinture'},
    {name: 'Sculpture'},
    {name: 'Divers'},
  ];

  epoque: Epoque[] = [
    {name: 'Antiquité'},
    {name: 'Moyen-Age'},
    {name: 'Rennaissance'},
    {name: 'Epoque Moderne'},
  ];

  drop(event: CdkDragDrop<Categorie[], Epoque[] >) {
    moveItemInArray(this.categorie, event.previousIndex, event.currentIndex);
    moveItemInArray(this.epoque, event.previousIndex, event.currentIndex);
 }

}
export interface Categorie {
  name: string;
}
export interface Epoque {
  name: string;
}

