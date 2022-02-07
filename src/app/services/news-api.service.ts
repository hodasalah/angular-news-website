import { Injectable, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, merge, BehaviorSubject, pipe, forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apikey: string = '9399344135b94510a621e4f7f99ed03f'


  constructor(private _http: HttpClient) { }
  topHeading = this._http.get(`https://newsapi.org/v2/top-headlines?country=eg&apiKey=${this.apikey}`)
  getTopHeading(): any {
    return this._http.get(`https://newsapi.org/v2/top-headlines?country=eg&apiKey=${this.apikey}`).pipe(map((item: any) => item.articles))
  }
  newsByCategories = (q: string): any => { return this._http.get(`https://newsapi.org/v2/top-headlines?country=us&category=${q}&apiKey=${this.apikey}`).pipe(map((item: any) => item.articles)) }


}
