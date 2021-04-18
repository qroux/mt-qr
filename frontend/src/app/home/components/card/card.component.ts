import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'ticket-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item!: Ticket;

  ngOnInit(): void {}
}
