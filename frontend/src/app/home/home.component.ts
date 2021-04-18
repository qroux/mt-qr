import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { TicketStatus } from '../pipes/ticketStatus';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { TicketsRefetchService } from '../ticketsRefetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  tickets: any;
  ticketStatus = TicketStatus;

  constructor(
    private homeService: HomeService,
    public dialog: MatDialog,
    private ticketsRefetchService: TicketsRefetchService
  ) {}

  ngOnInit() {
    this.homeService.getTickets().subscribe((res) => {
      this.tickets = res;
    });

    this.ticketsRefetchService.obs.subscribe(() =>
      this.homeService.getTickets().subscribe((res) => {
        this.tickets = res;
      })
    );
  }

  ngOnDestroy() {
    this.ticketsRefetchService.obs.subscribe(() =>
      this.homeService.getTickets().subscribe((res) => {
        this.tickets = res;
      })
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
  }

  editDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
  }
}
