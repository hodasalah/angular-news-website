import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private _newsApi: NewsApiService) { }
  newsData!: Observable<any[]>
  ngOnInit(): void {
    this.newsData = this._newsApi.newsByCategories('health')
  }

}
