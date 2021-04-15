import { IsDefined, IsOptional, IsString, IsEnum } from 'class-validator';
import { TicketStatus } from '../entities/ticket.entity';

export class UpdateTicketDto {
  @IsDefined()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(TicketStatus) // Not working
  status: string;
}
