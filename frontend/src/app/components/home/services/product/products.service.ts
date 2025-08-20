import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../types/products.type';

@Injectable()
export class ProductsService {
  private readonly baseURL = 'http://localhost:5001/products';
  constructor(private http: HttpClient) {}

  getAllProducts(filters?:{
    mainCategory?: number;
    subCategory?: number;
  }): Observable<Product[]> {
    let params = new HttpParams();

    if (filters?.mainCategory != null) {
      params = params.set('mainCategory', filters.mainCategory.toString());
    }
    if (filters?.subCategory != null) {
      params = params.set('subCategory', filters.subCategory.toString());
    }

    return this.http.get<Product[]>(this.baseURL, { params });
  }
}
