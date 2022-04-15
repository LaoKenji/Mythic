export class Produit{
    id_img: string;
    categorie: string;
    epoque: string;
    libelle_article: string;
    description: string;
    etat: string;
    prix: number;

    constructor(id: string, categorie: string, epoque: string, libelle_article: string, description: string, etat: string , prix: number) {
        this.id_img = id;
        this.categorie = categorie;
        this.epoque = epoque;
        this.libelle_article = libelle_article;
        this.description = description;
        this.etat = etat;
        this.prix = prix;
        
    }
}