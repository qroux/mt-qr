import { Component, OnInit } from '@angular/core';
import { TicketStatus } from '../pipes/ticketStatus';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { TicketsRefetchService } from '../ticketsRefetch.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tickets: any;
  ticketStatus = TicketStatus;

  constructor(
    private ticketService: TicketService,
    public dialog: MatDialog,
    private ticketsRefetchService: TicketsRefetchService
  ) {}

  ngOnInit() {
    this.ticketService.getTickets().subscribe((res) => {
      this.tickets = res;
    });

    this.ticketsRefetchService.obs.subscribe((data) => {
      if (data.isEdit) {
        this.ticketService.getTickets().subscribe((res) => {
          this.tickets = res;
        });
      } else {
        this.tickets = [...this.tickets, data];
      }
    });
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
