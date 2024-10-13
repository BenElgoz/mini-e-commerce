import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'cartItems'; 
  private items: any[] = [];

  constructor() {
    const savedItems = localStorage.getItem(this.storageKey);
    if (savedItems) {
      this.items = JSON.parse(savedItems);
    }
  }

  addToCart(product: any) {
    this.items.push(product);
    this.saveCart(); 
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.saveCart(); 
    return this.items;
  }

  private saveCart() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  removeItem(item: any) {
    this.items = this.items.filter(i => i !== item);
    this.saveCart(); 
  }
}
