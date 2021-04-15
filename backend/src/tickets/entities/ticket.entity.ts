import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum TicketStatus {
  TODO = 'To Do',
  INPROGRESS = 'In Progress',
  TOVALIDATE = 'To Validate',
  COMPLETE = 'Complete',
}

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'new ticket' })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'enum', enum: TicketStatus, default: TicketStatus.TODO })
  status: string;
}
