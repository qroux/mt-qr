import { constants } from 'src/constants';
import { Connection } from 'typeorm';
import { Ticket } from './entities/ticket.entity';

export const ticketsProviders = [
  {
    provide: constants.TICKETS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Ticket),
    inject: [constants.DATABASE_CONNECTION],
  },
];
