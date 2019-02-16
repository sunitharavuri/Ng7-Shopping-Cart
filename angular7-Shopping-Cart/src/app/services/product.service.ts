import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'Creame Den', price: 50, photo: 'image1.jpg' },
            { id: 'p02', name: 'Pink fun', price: 20, photo: 'image2.jpg' },
            { id: 'p03', name: 'Orange shin', price: 30, photo: 'image3.jpg' },
            { id: 'p04', name: 'White', price: 40, photo: 'image3.jpg' },
            { id: 'p05', name: 'Dark Angel', price: 60, photo: 'image5.jpg' },
            { id: 'p06', name: 'Light Green', price: 75, photo: 'image6.jpg' },
            { id: 'p07', name: 'White Wed', price: 90, photo: 'image7.jpg' },
            { id: 'p08', name: 'Radium Blue', price: 25, photo: 'image8.jpg' },
            { id: 'p09', name: 'Pink Flower', price: 45, photo: 'image9.jpg' },
            { id: 'p010', name: 'Maroon Den', price: 98, photo: 'image10.jpg' },
            { id: 'p011', name: 'Dark Blue', price: 45, photo: 'image11.jpg' },
            { id: 'p012', name: 'Mighty White', price: 46, photo: 'image12.jpg' },
            // { id: 'p013', name: 'name 13', price: 100, photo: 'image13.jpg' },
            { id: 'p014', name: 'Short Blue', price: 47, photo: 'image14.jpg' },
            { id: 'p015', name: 'Creamsen Green', price: 49, photo: 'image15.jpg' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}