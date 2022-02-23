import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { NewsApiService } from 'src/app/services/news-api.service';
import { catchError } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  noData = true
  errorMessage = ''
  constructor(private _newsApi: NewsApiService, private ngxLoader: NgxUiLoaderService) { }
  newsData!: Observable<any[]>
  ngOnInit(): void {
    this.ngxLoader.start();
    this.newsData = this._newsApi.newsByCategories('business').pipe(catchError((err) => {
      this.errorMessage = err;
      this.noData = true;
      return EMPTY;
    }));
    this.noData = false
    this.ngxLoader.stop();
  }

}
