import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../models/order-provider';
import { CatalogueItem } from '../models/catalogue-item';

@Injectable()
export class ProvidersService {
  constructor(private http: HttpClient) {}

  // todo: do not use duplicate code
  getAllProviders(): Observable<Array<Provider>> {
    return this.http.get<Array<Provider>>(
      'http://localhost:5000/api/providers'
    );
  }

  getCatalogItemByProviderId(providerId: number): Observable<Array<CatalogueItem>> {
    return this.http.get<Array<CatalogueItem>>(
      `http://localhost:5000/api/providers/${providerId}/menu`
    );
  }
}
