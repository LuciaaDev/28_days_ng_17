import { Routes } from '@angular/router';
import { ProductsComponent } from './feature/products/products.component';
import { CartComponent } from './feature/cart/cart.component';

export const routes: Routes = [
    {
        path: 'products', component: ProductsComponent
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: '', redirectTo: '/products', pathMatch: 'full'
    },
];
