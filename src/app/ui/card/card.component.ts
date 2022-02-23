import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  elem: any = document.querySelector('.parser')?.childNodes
  doc = new DOMParser().parseFromString(this.elem, "text/xml");

  constructor() { }

  ngOnInit(): void {
    console.log(this.doc);
  }

  @Input() data!: Observable<any>
}
