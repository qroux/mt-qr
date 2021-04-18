import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private apiService: ApiService) {}

  getTickets() {
    return this.apiService.get();
  }

  createTicket(formValues: Object) {
    return this.apiService.post(formValues);
  }
}