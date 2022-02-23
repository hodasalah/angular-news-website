import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators'
import { CommonService } from '../../services/common.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private _newsApi: NewsApiService, private service: CommonService, private ngxLoader: NgxUiLoaderService) { }
  topHeadingData!: Observable<any[]>
  noData: boolean = true
  data!: string;
  errorMessage!: string
  ngOnInit(): any {
    this.service.data$.subscribe(res => {
      this.ngxLoader.start();
      this.data = res
      this.topHeadingData = this._newsApi.getTopHeading(this.data).pipe(catchError((err) => {
        this.errorMessage = err;
        this.noData = true;
        return EMPTY;
      }));
      this.noData = false
      this.ngxLoader.stop();
    })

  }
}



