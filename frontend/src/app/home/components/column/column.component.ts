import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'ticket-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input() title: string = '';
  @Input() tickets: Ticket[] = [];

  constructor() {}

  ngOnInit(): void {}
}
