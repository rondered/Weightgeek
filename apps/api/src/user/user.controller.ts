import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Res,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '.';
import { User } from '@prisma/client';
import { AuthService } from '../auth';
import { ConfigService } from '@nestjs/config';
import { LoginUserDto, SignUpUserDto } from '../types';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private configService: ConfigService,
    private authService: AuthService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('Refresh'))
  async getUser(@Request() req): Promise<User> {
    const id = this.authService.getIdFromToken(req);
    return this.userService.loginOrSignUp(req.user.id);
  }

  @Post('/login')
  async loginUser(@Request() req, @Body() payload: LoginUserDto, @Res() res) {
    const { email, password } = payload;
    const user = await this.userService.login(email, password);
    const tokens = this.authService.generateTokens({ id: user.id });
    res.cookie('Authentication', tokens, {
      httpOnly: true,
      secure: this.configService.get('PRODUCTION'),
      maxAge: 259200000,
    });
    res.redirect(this.configService.get('FE_URL'));
  }

  @Post('/signup')
  async signUpUser(@Request() req, @Body() payload: SignUpUserDto, @Res() res) {
    const { email, password } = payload;
    const user = await this.userService.signUp(email, password);
    const tokens = this.authService.generateTokens({ id: user.id });
    res.cookie('Authentication', tokens, {
      httpOnly: true,
      secure: this.configService.get('PRODUCTION'),
      maxAge: 259200000,
    });
    res.send(user);
  }
}
