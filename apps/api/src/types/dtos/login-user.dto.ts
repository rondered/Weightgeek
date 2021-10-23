
import { IsNotEmpty } from 'class-validator';
export interface LoginUserDto {
  email: string;
  password?: string;

}