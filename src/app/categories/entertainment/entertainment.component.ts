import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private _newsApi: NewsApiService) { }
  newsData!: Observable<any[]>
  ngOnInit(): void {
    this.newsData = this._newsApi.newsByCategories('entertainment')
  }

}
