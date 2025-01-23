import { Component, EnvironmentInjector, inject, OnInit, runInInjectionContext } from '@angular/core';
import { ProductsService } from '../../api/products.service';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, CardComponent],
  // templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  template: `@if (products(); as products) {
    @for (product of products; track product.id) {
      <app-card [product]="product"></app-card>
    }
  }`
})
export class ProductsComponent {
  productSvc = inject(ProductsService);
  products = toSignal(this.productSvc.getAllProducts());

  // productsSvc = inject(ProductsService);
  // products$ = this.productsSvc.getAllProducts();

  // productSvc2: any;

  // private readonly injector = inject(EnvironmentInjector);

  // ngOnInit(): void {
  //   runInInjectionContext(this.injector, () => {
  //     this.productSvc2 = inject(ProductsService);
  //     const result = toSignal(this.products$);
  //     console.log("result:", result);
  //   });
  // }
}
