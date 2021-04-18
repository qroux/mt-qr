import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TicketService } from 'src/app/ticket.service';
import { TicketsRefetchService } from 'src/app/ticketsRefetch.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private ticketService: TicketService,
    private ticketsRefetchService: TicketsRefetchService
  ) {}
  ngOnInit(): void {}

  onSubmit(form: any) {
    // Use DB default value if title not provided
    const payload =
      form.value.title !== '' ? form.value : form.value.description;

    this.ticketService.createTicket(payload).subscribe((res) => {
      this.ticketsRefetchService.notify(null);
    });
    this.dialogRef.close();
  }
  onClose() {
    this.dialogRef.close();
  }
}
