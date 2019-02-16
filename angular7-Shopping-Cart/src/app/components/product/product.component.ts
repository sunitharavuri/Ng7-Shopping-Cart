import { Component, OnInit } from '@angular/core';

import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

	private products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
	}

	filterByPrice(event): void {
		let filterValue = event.target.value;
		if (filterValue === "Min_to_Max") {
			this.products.sort((a, b) => a.price - b.price);
		} else if (filterValue === "Max_to_Min") {
			this.products.sort((a, b) => a.price - b.price);
			this.products.reverse();
		}
	}
}