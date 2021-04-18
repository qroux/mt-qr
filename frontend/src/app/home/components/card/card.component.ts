import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ticket } from '../../../models/ticket';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'ticket-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item!: Ticket;

  constructor(public dialog: MatDialog) {}

  onEdit() {
    this.dialog.open(DialogComponent, { data: this.item });
  }
}
