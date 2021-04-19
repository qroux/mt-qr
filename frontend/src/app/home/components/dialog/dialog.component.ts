import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/ticket';
import { TicketStatus } from 'src/app/pipes/ticketStatus';
import { TicketService } from 'src/app/services/ticket.service';
import { TicketsRefetchService } from 'src/app/services/ticketsRefetch.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  isEdit: boolean = false;
  ticketStatus = ['To Do', 'In Progress', 'To Validate', 'Complete'];

  formData = {
    title: '',
    description: '',
    status: this.ticketStatus[0],
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogComponent>,
    private ticketService: TicketService,
    private ticketsRefetchService: TicketsRefetchService
  ) {}

  ngOnInit() {
    if (this.data) {
      this.isEdit = true;
      this.formData = this.data;
    }
  }

  onSubmit(form: any) {
    if (this.isEdit) {
      this.ticketService
        .updateTicket(this.data.id, form.value)
        .subscribe((res) => {
          this.ticketsRefetchService.notify(this.isEdit, res);
        });
    } else {
      this.ticketService.createTicket(form.value).subscribe((res) => {
        this.ticketsRefetchService.notify(this.isEdit, res);
      });
    }

    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close();
  }
}
