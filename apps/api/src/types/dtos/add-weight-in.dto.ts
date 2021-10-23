import { IsNotEmpty, IsDateString, IsPositive } from 'class-validator';

export class AddWeightInDto {
  @IsPositive()
  weight: number;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsPositive()
  calories?: number;
}