import { ReplaySubject, Observable } from 'rxjs';

export class TicketsRefetchService {
  subject: ReplaySubject<any> = new ReplaySubject();
  obs: Observable<any> = this.subject.asObservable();

  notify = (data: any) => {
    this.subject.next(data);
  };
}
