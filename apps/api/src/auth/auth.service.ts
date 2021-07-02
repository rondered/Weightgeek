import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { runInThisContext } from 'vm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  generateAccessToken(req): string {
    return this.jwtService.sign({ email: req.user.email });
  }

  generateRefreshToken(req) {
    return this.jwtService.sign(
      { email: req.user.email },
      {
        secret: this.configService.get('REFRESH_TOKEN').secret,
        expiresIn: this.configService.get('REFRESH_TOKEN').signOptions
          .expiresIn,
      },
    );
  }

  generateTokens(req) {
    return {
      access_token: this.generateAccessToken(req),
      refresh_token: this.generateRefreshToken(req),
    };
  }

  getEmailFromToken(req) {
    return req.user.email;
  }
}
