import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private data = new BehaviorSubject('apple');
  data$ = this.data.asObservable();

  changeData(str: string) {
    this.data.next(str)
    console.log(this.data)
  }
}

