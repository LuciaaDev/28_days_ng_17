import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class ProductsService {
    private readonly _http = inject(HttpClient);

    getAllProducts(): Observable<any> {
        return this._http.get('https://fakestoreapi.com/products');
    }

    // Descomentar para el caso del interceptor de error de la rama feat/02_interceptor_http
    // getAllProducts(): Observable<any> {
    //     return this._http.get('https://33fakestoreapi.com/products');
    // }
}