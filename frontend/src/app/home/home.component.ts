import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { TicketsRefetchService } from '../services/ticketsRefetch.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tickets: any;
  ticketStatus = ['To Do', 'In Progress', 'To Validate', 'Complete'];

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
