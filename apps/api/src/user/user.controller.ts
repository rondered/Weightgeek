import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '.';
import { User } from '@prisma/client';
import { AuthService } from '../auth';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private authService : AuthService) {}

  @Get()
  @UseGuards(AuthGuard('Refresh'))
  async getUser(@Request() req) : Promise<User> {
    const email = this.authService.getEmailFromToken(req);
    return this.userService.findOrSignUp(email);
  }
}
