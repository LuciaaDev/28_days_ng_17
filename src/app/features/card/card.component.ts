import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';


function addDiscountProperty(product: Product): Product {
  return {discount: false, ...product};
}

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  // Para optimizar el tipado y la utilización de la función addDiscountProperty()
  discount?: boolean;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // @Input({required: true, transform: addDiscountProperty }) product!: any;
  // rating: string[] = [];

  // ngOnChanges(changes: any): void {
  //   if(changes.product) {
  //     const { rating } = this.product;
  //     this.rating = Object.values(rating);
  //   }
  // }

  // No debemos confundir el decorador @Input() con el Signal input. El Signal input funciona como el ngOnChanges, que actualiza los datos cada vez que cambian.
  // Este código simplifica el código de arriba
  product = input.required({
    transform: addDiscountProperty,
  });

  rating = computed(() => {
    const { rating } = this.product();
    return Object.values(rating);
  });
}
