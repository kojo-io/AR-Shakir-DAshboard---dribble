import { IndexService } from './index.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public selectedIndex = 0;
  menu: Array<any> = [];
  constructor(private service: IndexService) {
    this.menu = this.service.menu;
   }

  ngOnInit(): void {
  }

  selected(i: any): void {
    this.selectedIndex = i;
  }

}
