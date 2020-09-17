import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MovieDate } from './../params/movieDate';

@Injectable()
export class ConfigService {

    private url = 'https://tools.texoit.com/backend-java/api/movies';

    constructor(private http: HttpClient) { }

    getMovieDate(parameters: MovieDate) : Observable<any> {
        let params = new HttpParams();
        params = params.set('page', parameters.page.toString());
        params = params.set('size', parameters.size.toString());
        params = params.set('winner', parameters.winner.toString());
        params = params.set('year', parameters.year);
        return this.http.get(this.url, {params});
    }
}
