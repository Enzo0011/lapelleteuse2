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