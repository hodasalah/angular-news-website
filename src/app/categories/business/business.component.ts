import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _newsApi: NewsApiService) { }
  newsData!: Observable<any[]>
  ngOnInit(): void {
    this.newsData = this._newsApi.newsByCategories('business')
  }

}
