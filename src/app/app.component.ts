import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './api/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly productsSvc = inject(ProductsService);

  products$ = this.productsSvc.getAllProducts();
}
