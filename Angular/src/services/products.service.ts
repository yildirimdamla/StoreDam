import { Injectable } from '@angular/core';
import { bags } from 'src/data/bags';
import { soaps } from 'src/data/soaps';
import { t_shirt } from 'src/data/t_shirts';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  static GetProducts: any[];
  constructor() {}
  GetProducts() {
    var randomly = [];
    var maxLength = 0;

    if (soaps.length > bags.length && soaps.length > t_shirt.length) {
      maxLength = soaps.length;
    } else if (bags.length > t_shirt.length && bags.length > soaps.length) {
      maxLength = bags.length;
    } else {
      maxLength = t_shirt.length;
    }

    for (let index = 0; index < maxLength; index++) {
      if (t_shirt[index] !== null) {
        randomly.push(t_shirt[index]);
      }
      if (bags[index] !== null) {
        randomly.push(bags[index]);
      }
      if (soaps[index] !== null) {
        randomly.push(soaps[index]);
      }
    }
    console.log(randomly);
    return randomly;
  }
}
