import { IsNotEmpty, IsPositive, IsDateString } from 'class-validator';

export class AddWeightInDto {
  weight?: number;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  calories?: number;
}