import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id')); 
    this.product = ProductListComponent.prototype.products.find(p => p.id === productId);  
  }
}
