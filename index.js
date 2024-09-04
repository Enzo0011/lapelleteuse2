
import BoxMultiton from './Multiton.js';

// liste de 9 machines (pour tester la box de 8 max)
const machines = [
    { type: 'pelleteuse' },
    { type: 'tractopelle' },
    { type: 'nacelle' },
    { type: 'bulldozer' },
    { type: 'rouleau' },
    { type: 'pelleteuse' },
    { type: 'nacelle' },
    { type: 'tractopelle' },
    { type: 'bulldozer' },
    { type: 'nacelle' },
    { type: 'rouleau' }
];

// on boucle pour créer les machines (limite de 8 par box toujours)
machines.forEach(machineData => {
    new BoxMultiton(machineData);
});

// Voici nos Box avec maximum 8 macjines
const allBoxes = BoxMultiton.getInstance();
console.log("=== Résultats ===");
console.log(`Nombre de box créées : ${allBoxes.length}`);

allBoxes.forEach((box, index) => {
    console.log(`Box ${index + 1} contient ${box.length} machines.`);
});