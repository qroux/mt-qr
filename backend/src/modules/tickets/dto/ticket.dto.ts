import { IsOptional, IsString, IsEnum } from 'class-validator';
import { TicketStatus } from '../entities/ticket.entity';

export class TicketDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(TicketStatus, {
    message: `status value must be within ${Object.keys(TicketStatus).map(
      (k) => `'${TicketStatus[k]}'`,
    )}`,
  })
  status: string;
}
