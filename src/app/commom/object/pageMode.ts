import { Page } from './page';

export class PageMode {
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
    pages: Array<Page>;
    pageSelected: number;

    constructor(totalPages: number, totalElements: number, last: boolean, first: boolean) {
        this.first = first;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
        this.last = last
        this.calculaQuantidadePagas(totalPages);
    }

    setPageSelected(value: number) {
        this.pageSelected = value;
    }

    calculaQuantidadePagas(totalPages: number) {
        this.pages = new Array<Page>();
        for (let i: number = 0; i < totalPages; i++) {
            const value = i + 1;
            this.pages.push(new Page(i, value));
        }
    }
}