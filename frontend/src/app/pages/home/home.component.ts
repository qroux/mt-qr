import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { TicketsRefetchService } from '../../services/ticketsRefetch.service';
import { TicketService } from '../../services/ticket.service';
import { TicketStatus } from 'src/app/pipes/ticketStatus';
import { Ticket } from 'src/app/models/ticket';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tickets: Ticket[] = [];
  ticketStatus: TicketStatus[] = Object.values(TicketStatus);

  constructor(
    private ticketService: TicketService,
    public dialog: MatDialog,
    private ticketsRefetchService: TicketsRefetchService
  ) {}

  ngOnInit() {
    this.ticketService.getTickets().subscribe((res: any) => {
      this.tickets = res;
    });

    this.ticketsRefetchService.obs
      .pipe(
        tap((data) => {
          if (data.isEdit) {
            this.ticketService.getTickets().subscribe((res: any) => {
              this.tickets = res;
            });
          } else {
            this.tickets = [...this.tickets, data];
          }
        })
      )
      .subscribe();
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
