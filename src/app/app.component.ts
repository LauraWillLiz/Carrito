import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import {ProductService } from './product.service';
import { CartService } from './cart.service';
import {CartEntity} from './cart.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartService]
})
export class AppComponent implements OnInit { 
  title = 'app works!';
  public cartEntities : CartEntity[];
  public totalQuantity : number; 
  constructor(private _cartService: CartService) {}

  ngOnInit() {
      this.getProducts();
  }

  getProducts() {
      this._cartService.getAllCartEntities().then(function(result) {

          this.cartEntities = result;
          this.quantityAll();

        }.bind(this), function(err) {
            alert("Ocurrio un error al obtener los productos");
        });
    }
 
  quantityAll () {

      let totalQuantity = 0;
      this.cartEntities.forEach(function(entity) {
          totalQuantity += entity.quantity;
      });
      this.totalQuantity = totalQuantity;
    }
}