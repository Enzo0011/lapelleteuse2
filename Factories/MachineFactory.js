import Bulldozer from '../Models/Bulldozer.js';
import Nacelle from '../Models/Nacelle.js';
import Pelleteuse from '../Models/Pelleteuse.js';
import Rouleau from '../Models/Rouleau.js';
import Tractopelle from '../Models/Tractopelle.js';

// La factory n'est pas nécessaire dans ce cas puisque les Machines ne comportent qu'un type
// Mais il faut prendre en compte la potentielle évolution du site, avec des caractéristques qui changent en fonction de la machine

class MachineFactory{
    constructor(machine){

        switch(machine.type) {
            case 'pelleteuse':
                return new Pelleteuse(machine);
            case 'tractopelle':
                return new Tractopelle(machine);
            case 'nacelle':
                return new Nacelle(machine);
            case 'bulldozer':
                return new Bulldozer(machine);
            case 'rouleau':
                return new Rouleau(machine);
            default:
                throw new Error('Aucun type connu');
        }
    }
}

export default MachineFactory;