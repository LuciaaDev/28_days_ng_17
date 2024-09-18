import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../api/products.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productsSvc = inject(ProductsService);
  products$ = this.productsSvc.getAllProducts();

}
