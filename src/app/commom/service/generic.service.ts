import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";

import { ProducerList } from './../object/ProducerList';
import { Observable } from 'rxjs';
import { MovieParams } from './../params/MovieParams';
import { Studios } from '../object/Studios';
import { Years } from '../object/Years';
import { YearWinner } from '../object/YearWinner';
import { MovieDate } from '../object/MovieDate';

@Injectable()
export class ConfigService {

    private url = 'https://tools.texoit.com/backend-java/api/movies';

    constructor(private http: HttpClient) { }

    getMovieDate(parameters: MovieParams) : Observable<MovieDate> {
        let params = new HttpParams();
        params = params.set('page', parameters.page.toString());
        params = params.set('size', parameters.size.toString());
        params = params.set('winner', parameters.winner.toString());
        params = params.set('year', parameters.year);
        return this.http.get<MovieDate>(this.url, {params});
    }

    getProjection(projection: string) {
        let params = new HttpParams();
        params = params.set('projection', projection);        
        return this.http.get(this.url, {params});
    }

    getYearWinner(year: string): Observable<YearWinner>  {
        let params = new HttpParams();        
        params = params.set('winner', 'true');        
        params = params.set('year', year);        
        return this.http.get<YearWinner>(this.url, {params});
    }

    getProductList(): Observable<ProducerList> {
        let params = new HttpParams();
        params = params.set('projection', 'max-min-win-interval-for-producers');        
        return this.http.get<ProducerList>(this.url, {params});
    }

    getStudiosWinner(): Observable<Studios> {
        let params = new HttpParams();
        params = params.set('projection', 'studios-with-win-count');        
        return this.http.get<Studios>(this.url, {params});
    }
    
    getYearWithMultipleWinner(): Observable<Years> {
        let params = new HttpParams();
        params = params.set('projection', 'years-with-multiple-winners');        
        return this.http.get<Years>(this.url, {params});
    }

}
