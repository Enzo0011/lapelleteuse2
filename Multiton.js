import MachineFactory from './Factories/MachineFactory.js';

class BoxMultiton {
    constructor(machine) {
        if (!BoxMultiton.boxes) BoxMultiton.boxes = [[]];

        let currentBox = BoxMultiton.boxes[BoxMultiton.boxes.length - 1];

        if (currentBox.length >= 8) {
            currentBox = [];
            BoxMultiton.boxes.push(currentBox);
        }

        const newMachine = new MachineFactory(machine);
        newMachine.create();
        currentBox.push(newMachine);
        console.log(`Machine avec le type ${newMachine.type} ajoutée à la box ${BoxMultiton.boxes.length}.`);
    }

    static getInstance() {
        return BoxMultiton.boxes;
    }
}

export default BoxMultiton;