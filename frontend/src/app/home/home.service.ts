import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url = 'http://localhost:3000/tickets';

  constructor(private httpClient: HttpClient) {}

  getTickets() {
    return this.httpClient.get(this.url);
  }
}
