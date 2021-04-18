import { ReplaySubject, Observable } from 'rxjs';
import { Ticket } from './models/ticket';

export class TicketsRefetchService {
  subject: ReplaySubject<Ticket> = new ReplaySubject();
  obs: Observable<any> = this.subject.asObservable();

  notify = (isEdit: boolean, data: any) => {
    this.subject.next({ isEdit, ...data });
  };
}
