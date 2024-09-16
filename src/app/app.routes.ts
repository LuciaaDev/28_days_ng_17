import { Routes } from '@angular/router';
import { ProductsComponent } from './feature/products/products.component';
import { CartComponent } from './feature/cart/cart.component';
import { DetailsComponent } from './feature/details/details.component';

export const routes: Routes = [
    {
        path: 'products', component: ProductsComponent
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'product-details/:id', component: DetailsComponent
    },
    {
        path: '', redirectTo: '/products', pathMatch: 'full'
    },
];
