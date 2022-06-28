import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  public menu: Array<any> = [
    {
      path: 'dashboard',
      title: 'Dashboard',
      children: []
    }
  ]
  constructor() { }
}
