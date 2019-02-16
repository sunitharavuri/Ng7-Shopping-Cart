import { Component, OnInit ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-filter',
  templateUrl: './shopping-filter.component.html',
  styleUrls: ['./shopping-filter.component.scss']
})
export class ShoppingFilterComponent implements OnInit {
 
  @Output() filterByPrice = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
