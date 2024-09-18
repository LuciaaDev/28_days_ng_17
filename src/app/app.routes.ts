import { Routes } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { CartComponent } from './features/cart/cart.component';
import { DetailsComponent } from './features/details/details.component';

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
