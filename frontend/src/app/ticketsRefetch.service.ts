import { ReplaySubject, Observable } from 'rxjs';
import { Ticket } from './models/ticket';

export class TicketsRefetchService {
  subject: ReplaySubject<Ticket> = new ReplaySubject();
  obs: Observable<Ticket> = this.subject.asObservable();

  notify = (data: any) => {
    this.subject.next(data);
  };
}
