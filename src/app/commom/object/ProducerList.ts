import { Producer } from './Producer';
export class ProducerList {
    max: Array<Producer>;
    min: Array<Producer>;

    constructor() {
        this.max = new Array<Producer>();
        this.min = new Array<Producer>();
    }
}