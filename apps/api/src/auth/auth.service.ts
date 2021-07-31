import { Injectable, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response, Request } from 'express';
import { UserService } from '../user';
@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  generateAccessToken(payload): string {
    return this.jwtService.sign(payload, {
      secret: this.configService.get('ACCESS_TOKEN').secret,
      expiresIn: this.configService.get('ACCESS_TOKEN').signOptions.expiresIn,
    });
  }

  generateRefreshToken(payload): string {
    return this.jwtService.sign(payload, {
      secret: this.configService.get('REFRESH_TOKEN').secret,
      expiresIn: this.configService.get('REFRESH_TOKEN').signOptions.expiresIn,
    });
  }

  generateTokens(payload) {
    return {
      access_token: this.generateAccessToken(payload),
      refresh_token: this.generateRefreshToken(payload),
    };
  }

  getIdFromToken(req): string {
    return req.user.id;
  }

  refreshAccessToken(@Req() req: Request, @Res() res: Response): void {
    res.cookie(
      'Authentication',
      {
        access_token: this.generateAccessToken(req),
        refresh_token: req.cookies.Authentication.refresh_token,
      },
      {
        httpOnly: true,
        secure: this.configService.get('PRODUCTION'),
        maxAge: 259200000,
      },
    );
    res.send(req.user);
  }

  refreshTokens(payload, @Res() res: Response): void {
    res.cookie(
      'Authentication',
      {
        access_token: this.generateAccessToken(payload),
        refresh_token: this.generateRefreshToken(payload),
      },
      {
        httpOnly: true,
        secure: this.configService.get('PRODUCTION'),
        maxAge: 259200000,
      },
    );
    res.send();
  }
}
