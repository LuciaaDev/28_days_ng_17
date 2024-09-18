import { Component, inject } from '@angular/core';
import { ProductsService } from '../../api/products.service';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productsSvc = inject(ProductsService);
  products$ = this.productsSvc.getAllProducts();

}
