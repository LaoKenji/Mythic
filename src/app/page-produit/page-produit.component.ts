import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.scss']
})
export class PageProduitComponent implements OnInit {

  data = [] as any;
  path = "";
  id = "" as any;
  constructor(private route : ActivatedRoute,
    private http : HttpClient) {
   }

  ngOnInit(): void {
  }

}
