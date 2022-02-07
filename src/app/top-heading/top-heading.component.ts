import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators'

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnChanges, OnInit {

  constructor(private _newsApi: NewsApiService) { }
  topHeadingData!: Observable<any[]>

  ngOnChanges(): void { }
  ngOnInit(): any {
    this.topHeadingData=this._newsApi.getTopHeading()

  }
}



