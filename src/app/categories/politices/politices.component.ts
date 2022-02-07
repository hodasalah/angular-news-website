import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-politices',
  templateUrl: './politices.component.html',
  styleUrls: ['./politices.component.css']
})
export class PoliticesComponent implements OnInit {

  constructor(private _newsApi: NewsApiService) { }
  newsData!: Observable<any[]>
  ngOnInit(): void {
    this.newsData = this._newsApi.newsByCategories('general')
  }

}
