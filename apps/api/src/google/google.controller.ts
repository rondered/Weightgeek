import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('google')
export class GoogleController {
  constructor(private authService: AuthService, private configService : ConfigService ) {}

  @Get('redirect')
  @UseGuards(AuthGuard('Google'))
  redirectFromGoogle(@Req() req, @Res() res: Response) {
    const tokens = this.authService.generateTokens(req);
    // res.setHeader(
    //   'Set-Cookie',
    //   `Authentication=${tokens.refresh_token}; HttpOnly; Max-Age='1d'`,
    // );
    res.cookie('Authentication', tokens, {
      httpOnly: true,
      secure: this.configService.get('PRODUCTION'),
      maxAge: 259200000,
    });
    return res.redirect(this.configService.get('FE_URL'));
  }
}
