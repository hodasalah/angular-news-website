import { outputAst } from '@angular/compiler';
import { Component, OnChanges, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: CommonService,
    private router: Router) { }

  searchq!: string
  name = ""
  url!: any
  ngOnInit(): void {
    this.service.data$.subscribe(res => {
      console.log(res)
      this.searchq = res
    })

    // get url 
    this.router.events.subscribe((event) => {
      event instanceof NavigationEnd ? this.url = event.url : null
    })
  }
  newData(form: any) {
    this.service.changeData(form.value.searchq);
  }

}
