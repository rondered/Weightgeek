import { IsNotEmpty, IsDateString } from 'class-validator';

export class AddWeightInDto {
  weight?: number;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  calories?: number;
}