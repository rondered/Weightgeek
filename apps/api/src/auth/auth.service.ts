import { Injectable, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response, Request } from 'express';
import { UserService } from '../user/user.service';
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

  generateTokens(payload): { access_token: string; refresh_token: string } {
    return {
      access_token: this.generateAccessToken(payload),
      refresh_token: this.generateRefreshToken(payload),
    };
  }

  getIdFromToken(req): string {
    return req.user.id;
  }

  refreshAccessToken(@Req() req: Request, @Res() res: Response): void {
    res.send({ access_token: this.generateAccessToken(req) });
  }

  refreshTokens(payload, @Res() res: Response): void {
    const { access_token, refresh_token } = this.generateTokens(payload);

    res.cookie(
      'Authentication',
      {
        refresh_token,
      },
      {
        httpOnly: true,
        secure: this.configService.get('PRODUCTION'),
        maxAge: 259200000,
      },
    );
    res.send({ access_token });
  }

  passportTokens(req, res): void {
    const refresh_token = this.generateRefreshToken({
      id: req.user.id,
      email: req.user.email,
    });
    res.cookie(
      'Authentication',
      { refresh_token },
      {
        httpOnly: true,
        secure: this.configService.get('PRODUCTION'),
        maxAge: 259200000,
      },
    );
    res.redirect(`${this.configService.get('FE_URL')}`);
  }

  invalidateTokens(req, res): void {
    res.cookie(
      'Authentication',
      { refresh_token: '' },
      {
        httpOnly: true,
        secure: this.configService.get('PRODUCTION'),
        maxAge: 259200000,
      },
    );
    res.redirect(`${this.configService.get('FE_URL')}`);
  }
}
