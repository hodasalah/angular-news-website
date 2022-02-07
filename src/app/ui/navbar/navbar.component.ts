import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private newsApi: NewsApiService) { }

  searchq = "apple"
  data!: any
  onSubmit(form: any): void {
    console.log(form.value)
  }
  ngOnInit(): void {

  }

}
