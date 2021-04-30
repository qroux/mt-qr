import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketService } from 'src/app/services/ticket.service';
import { TicketsRefetchService } from 'src/app/services/ticketsRefetch.service';
import { Ticket } from '../../../../models/ticket';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'ticket-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item!: Ticket;
  colors: { [key: string]: string } = {
    'To Do': 'grey',
    'In Progress': '#fb6800',
    'To Validate': '#b7b705',
    Complete: 'green',
  };

  constructor(
    public dialog: MatDialog,
    private ticketService: TicketService,
    private ticketsRefetchService: TicketsRefetchService
  ) {}

  onEdit() {
    this.dialog.open(DialogComponent, { data: this.item });
  }

  onDelete() {
    this.ticketService.deleteTicket(this.item.id).subscribe((res) => {
      this.ticketsRefetchService.notify(true, res);
    });
  }
}
