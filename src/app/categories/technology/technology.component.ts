import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private _newsApi: NewsApiService) { }

  newsData!: Observable<any[]>
  ngOnInit(): void {
    this.newsData = this._newsApi.newsByCategories('technology')
  }
}
