import { Pageable } from './Pageable';
import { YearWinner } from './YearWinner';

export class MovieDate {
    content: Array<YearWinner>;
    totalElements: number;
    last: boolean;
    totalPages: number;
    first: boolean;
    pageable: Pageable;

    constructor() {
        this.first = false;
        this.last = false;
    }
}