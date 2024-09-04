class Rouleau {
    constructor(machine) {
        this.type = machine.type
    }

    create() {
        console.log(`Machine : ${this.type} créée !`);
    }
}