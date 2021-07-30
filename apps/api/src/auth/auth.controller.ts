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

  @Get('access')
  @UseGuards(AuthGuard('Refresh'))
  refreshToken(@Req() req: Request, @Res() res: Response) {
    res.cookie(
      'Authentication',
      {
        access_token: this.authService.generateAccessToken(req),
        refresh_token: req.cookies.Authentication.refresh_token,
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
  @UseGuards(AuthGuard('Access'))
  checkAuth(@Req() req) {
    return { success: true };
  }
}
