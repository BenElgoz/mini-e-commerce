import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private cartService: CartService, private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Informations de paiement:', form.value);

      this.cartService.clearCart();

      this.router.navigate(['/confirmation']);
    }
  }
}
