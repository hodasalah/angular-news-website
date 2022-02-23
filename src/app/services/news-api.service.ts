import { Injectable, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apikey: string = '9399344135b94510a621e4f7f99ed03f'


  constructor(private _http: HttpClient) { }
  handleError(err: any): Observable<never> {

    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  getTopHeading(q: string): any {
    return this._http.get(`https://newsapi.org/v2/everything?q=${q}&apiKey=${this.apikey}`).pipe(map((item: any) => item.articles), catchError(this.handleError))
  }
  newsByCategories = (q: string): any => {
    return this._http.get(`https://newsapi.org/v2/top-headlines?country=us&category=${q}&apiKey=${this.apikey}`).pipe(map((item: any) => {
      console.log(item);
      return item.articles
    }), catchError(this.handleError))
  }
}
