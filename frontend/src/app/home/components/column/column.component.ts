import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'ticket-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Input() title: string = '';
  @Input() tickets: Ticket[] = [];
}
