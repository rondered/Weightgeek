import { IsNotEmpty } from 'class-validator';
export class SignUpUserDto {
  @IsNotEmpty()
  email: string;

  password?: string;
}
