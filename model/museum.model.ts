import Oeuvre from "./oeuvre.model";

class Museum {
    id: number;
    nom: string;
    theme: string;
    salles : Salle[];
}

class Salle {
    id: number;
    nom: string;
    theme: string;
    oeuvres : Oeuvre[];
}

export default Museum;