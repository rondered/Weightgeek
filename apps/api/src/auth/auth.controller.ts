import {
  Controller,
  Get,
  Req,
  UseGuards,
  Res,
  Post,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { SignUpUserDto, LoginUserDto } from '../types';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get('access')
  @UseGuards(AuthGuard('Refresh'))
  refreshToken(@Req() req: Request, @Res() res: Response) {
    res.cookie(
      'Authentication',
      {
        refresh_token: req.cookies.Authentication.refresh_token,
      },
      {
        httpOnly: true,
        secure: this.configService.get('PRODUCTION'),
        maxAge: 259200000,
      },
    );
    return res.send({
      access_token: this.authService.generateAccessToken(req.user),
    });
  }

  @Get()
  @UseGuards(AuthGuard('Access'))
  checkAuth(@Req() req) {
    return { success: true };
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('Google'))
  redirectFromGoogle(@Req() req, @Res() res: Response) {
    this.authService.passportTokens(req, res);
  }

  @Get('facebook/redirect')
  @UseGuards(AuthGuard('Facebook'))
  redirectFromFacebook(@Req() req, @Res() res: Response) {
    this.authService.passportTokens(req, res);
  }

  @Post('/signup')
  async signUpUser(@Req() req, @Body() payload: SignUpUserDto, @Res() res) {
    const { email, password } = payload;
    const user = await this.userService.signUp({ email }, password);
    this.authService.refreshTokens(
      {
        id: user.id,
        email: user.email,
      },
      res,
    );
  }

  @Post('/login')
  async loginUser(@Req() req, @Body() payload: LoginUserDto, @Res() res) {
    const { email, password } = payload;
    const user = await this.userService.login(email, password);
    this.authService.refreshTokens(
      {
        id: user.id,
        email: user.email,
      },
      res,
    );
  }

  @Get('me')
  @UseGuards(AuthGuard('Access'))
  async getUser(@Req() req): Promise<User> {
    const id = this.authService.getIdFromToken(req);
    return this.userService.getUser({ id: req.user.id });
  }
}
