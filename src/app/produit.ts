export class Produit{
    id: string;  
    libelle_article: string;
    etat: string;
    prix: number;

    constructor(id: string, libelle_article: string, etat: string , prix: number) {
        this.id = id;
        this.libelle_article = libelle_article;
        this.etat = etat;
        this.prix = prix;
        
    }
}