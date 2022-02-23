import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private _newsApi: NewsApiService) { }
  newsData!: Observable<any[]>
  ngOnInit(): void {
    this.newsData = this._newsApi.newsByCategories('science')
  }

}
