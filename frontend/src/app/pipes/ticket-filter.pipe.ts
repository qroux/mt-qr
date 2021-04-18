import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from '../models/ticket';

@Pipe({
  name: 'ticketFilter',
})
export class TicketFilterPipe implements PipeTransform {
  transform(tickets: Ticket[], filter: string): Ticket[] {
    if (!tickets || !filter) {
      return tickets;
    }

    return tickets.filter((t) => t.status === filter);
  }
}
