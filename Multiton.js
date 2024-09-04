class BoxMultiton {
    constructor() {
        if(!BoxMultiton.listInstance) {
            BoxMultiton.listInstance = [this];
        } else if(BoxMultiton.listInstance.length < 8) {
            BoxMultiton.listInstance.push(this);
        }
        return BoxMultiton.listInstance;
    }
}


export default BoxMultiton;