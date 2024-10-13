import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Chaussures de sport',
      price: 49.99,
      description: 'Chaussures confortables pour la course à pied.',
      imageUrl: 'https://www.cdiscount.com/pdt2/5/2/2/1/700x700/mp12337522/rw/chaussures-de-sport-basket-running-respirantes-ath.jpg'
    },
    {
      id: 2,
      name: 'T-shirt en coton',
      price: 19.99,
      description: 'T-shirt de qualité en coton bio.',
      imageUrl: 'https://www.adrenagliss.fr/2958-large_default/l-essentiel-teeshirt-homme-fabrique-en-france-en-coton-bio.jpg'
    },
    {
      id: 3,
      name: 'Sac à dos',
      price: 39.99,
      description: 'Sac à dos pratique pour les voyages.',
      imageUrl: 'https://cdn1.lesacados.com/wp-content/uploads/2015/09/20112420/Eagle-Creek-40l-1024x1024.jpg'
    },
    {
      id: 4,
      name: 'Lunettes de soleil',
      price: 24.99,
      description: 'Lunettes de soleil avec protection UV.',
      imageUrl: 'https://translaser.fr/cdn/shop/files/lunettes-de-soleil-avec-protection-uv-premia-bleu-1.jpg?v=1691397048'
    },
    {
      id: 5,
      name: 'Casquette',
      price: 14.99,
      description: 'Casquette en coton ajustable.',
      imageUrl: 'https://417feet.com/9864-thickbox_default/casquette-richardson-212-coton-reglable-columbia-blue.jpg'
    },
    {
      id: 6,
      name: 'Montre connectée',
      price: 99.99,
      description: 'Montre avec suivi d\'activité et notifications.',
      imageUrl: 'https://m.media-amazon.com/images/I/617gHZ0Y8ZL.jpg'
    },
    {
      id: 7,
      name: 'Bouteille d\'eau réutilisable',
      price: 9.99,
      description: 'Bouteille d\'eau en acier inoxydable.',
      imageUrl: 'https://media.cadoetik.com/e/6/b/e/1-bouteille-isotherme-helsinki-500-ml-publicitaire-cadoetik.jpg'
    },
    {
      id: 8,
      name: 'Bonnet en laine',
      price: 14.99,
      description: 'Bonnet chaud pour l\'hiver.',
      imageUrl: 'https://m.media-amazon.com/images/I/71ZVOa7o+2L._AC_UY1000_.jpg'
      
    },
    {
      id: 9,
      name: 'Gants en laine',
      price: 19.99,
      description: 'Gants chauds pour l\'hiver.',
      imageUrl: 'https://m.media-amazon.com/images/I/61da5XspcqL._AC_UF1000,1000_QL80_.jpg'
    },
    // {
    //   id: 10,
    //   name: 'Chaussures en cuir',
    //   price: 89.99,
    //   description: 'Chaussures élégantes pour homme.',
    //   imageUrl: 'https://www.cdiscount.com/pdt2/4/8/8/1/700x700/mp60450488/rw/derby-chaussure-chic-homme-mode-confortable-exquis.jpg'
    // },
    // {
    //   id: 11,
    //   name: 'Veste en cuir',
    //   price: 149.99,
    //   description: 'Veste en cuir véritable pour homme.',
    //   imageUrl: 'https://via.placeholder.com/400x400'
    // },
    // {
    //   id: 12,
    //   name: 'Pantalon de randonnée',
    //   price: 69.99,
    //   description: 'Pantalon durable pour les aventures en plein air.',
    //   imageUrl: 'https://via.placeholder.com/400x400'
    // },
    // {
    //   id: 13,
    //   name: 'Pull en cachemire',
    //   price: 89.99,
    //   description: 'Pull doux et confortable en cachemire.',
    //   imageUrl: 'https://via.placeholder.com/400x400'
    // },
    // {
    //   id: 14,
    //   name: 'Veste imperméable',
    //   price: 119.99,
    //   description: 'Veste légère et imperméable pour la pluie.',
    //   imageUrl: 'https://via.placeholder.com/400x400'
    // },
    // {
    //   id: 15,
    //   name: 'Écharpe en laine',
    //   price: 24.99,
    //   description: 'Écharpe chaude et douce pour l\'hiver.',
    //   imageUrl: 'https://via.placeholder.com/400x400'
    // }
  ];

  showToast = false;
  toastClass = 'zoomIn';  

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
    
    this.toastClass = 'zoomIn';
    this.showToast = true;

    setTimeout(() => {
      this.toastClass = 'zoomOut';
    }, 1000);

    setTimeout(() => {
      this.showToast = false;
    }, 1300); 
  }
}
