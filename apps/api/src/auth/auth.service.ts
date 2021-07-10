import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user';
@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  generateAccessToken(payload: any): string {
    return this.jwtService.sign(payload);
  }

  generateRefreshToken(payload) {
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

  getIdFromToken(req) {
    return req.user.id;
  }
}
