import OeuvreController from '../app/api/oeuvre/oeuvre.controller';
import Oeuvre from '../model/oeuvre.model';
import { expect, test } from 'vitest';

test('should add an oeuvre', () => {
    const oeuvre: Oeuvre = { 
        id: 1, 
        titre: 'Test Oeuvre',
        proprietaire: '',
        status: '',
        etat: '',
        type: '',
        prix: 0,
        image: '',
        note: 0
    };
    const oeuvreController = new OeuvreController();
    oeuvreController.ajouterOeuvre(oeuvre);
    expect(oeuvreController.trouverOeuvre(1)).toBe(1);
});

// test('should delete an oeuvre', () => {
//     const oeuvre = { id: 1, title: 'Test Oeuvre' };
//     const oeuvreController = new OeuvreController();
//     oeuvreController.oeuvres = [oeuvre];
//     oeuvreController.supprimerOeuvre(1);
//     expect(oeuvreController.oeuvres.length).toBe(0);
// });

// test('should modify an oeuvre', () => {
//     const oeuvre = { id: 1, title: 'Test Oeuvre' };
//     const modifiedOeuvre = { id: 1, title: 'Modified Oeuvre' };
//     const oeuvreController = new OeuvreController();
//     oeuvreController.oeuvres = [oeuvre];
//     oeuvreController.modifierOeuvre(modifiedOeuvre);
//     expect(oeuvreController.oeuvres.length).toBe(1);
//     expect(oeuvreController.oeuvres[0]).toEqual(modifiedOeuvre);
//     });
