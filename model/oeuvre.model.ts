class Oeuvre {
    id: number;
    titre: string;
    proprietaire: string;
    status : string;
    etat : string;
    type: string;
    prix: number;
    image: string;
    note: number;

    constructor(id: number, titre: string, proprietaire: string, status: string, etat: string, type: string, prix: number, image: string, note: number) {
        this.id = id;
        this.titre = titre;
        this.proprietaire = proprietaire;
        this.status = status;
        this.etat = etat;
        this.type = type;
        this.prix = prix;
        this.image = image;
        this.note = note;
    }
}

export default Oeuvre;