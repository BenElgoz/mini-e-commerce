import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boutique-en-ligne';
}
