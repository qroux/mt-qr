import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:3000/tickets';

  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get(this.apiUrl);
  }

  post(payload: Object) {
    return this.httpClient.post(this.apiUrl, payload);
  }

  patch(payload: Object) {
    return this.httpClient.patch(this.apiUrl, payload);
  }

  delete(id: number) {
    return this.httpClient.delete(this.apiUrl + id);
  }
}
