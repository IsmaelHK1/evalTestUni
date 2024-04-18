import Oeuvre  from '../../../model/oeuvre.model';

class OeuvreController {
    private oeuvres: Oeuvre[] = [];

    ajouterOeuvre(oeuvre: Oeuvre): void {
        this.oeuvres.push(oeuvre);
    }

    trouverOeuvre(id: number): Oeuvre | undefined {
        return this.oeuvres.find((oeuvre) => oeuvre.id === id);
    }

    supprimerOeuvre(id: number): void {
        this.oeuvres = this.oeuvres.filter((oeuvre) => oeuvre.id !== id);
    }

    modifierOeuvre(oeuvre: Oeuvre): void {
        this.oeuvres = this.oeuvres.map((o) => {
            if (o.id === oeuvre.id) {
                return oeuvre;
            }
            return o;
        });
    }

    
}

export default OeuvreController;