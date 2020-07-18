import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/services/products.service';
import { t_shirt } from 'src/data/t_shirts';
import { soaps } from 'src/data/soaps';
import { bags } from 'src/data/bags';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css'],
})
export class ProductsSectionComponent implements OnInit {
  t_shirtList = t_shirt;
  soapList = soaps;
  bagList = bags;
  data = [];

  constructor(private _productsservice: ProductsService) {}

  ngOnInit(): void {
    this.data = this._productsservice.GetProducts();
  }
}
