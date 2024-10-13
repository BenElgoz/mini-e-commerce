import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  removeItem(item: any) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems(); 
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
