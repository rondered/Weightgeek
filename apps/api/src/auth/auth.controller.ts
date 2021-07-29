import { Controller, Get, Req, UseGuards, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {}

  @Get('refresh')
  @UseGuards(AuthGuard('Access'))
  refreshToken(@Req() req: Request, @Res() res: Response) {
    res.cookie(
      'Authentication',
      {
        access_token: req.cookies.Authentication.access_token,
        refresh_token: this.authService.generateRefreshToken(req),
      },
      {
        httpOnly: true,
        secure: this.configService.get('PRODUCTION'),
        maxAge: 259200000,
      },
    );
    return res.send(req.user);
  }

  @Get()
  @UseGuards(AuthGuard('Refresh'))
  checkAuth(@Req() req) {
    return { success: true };
  }
}
