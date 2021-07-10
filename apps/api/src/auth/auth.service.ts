import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user';
@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  generateAccessToken(req): string {
    return this.jwtService.sign({
      id: req.user.id,
    });
  }

  generateRefreshToken(req) {
    return this.jwtService.sign(
      { id: req.user.id },
      {
        secret: this.configService.get('REFRESH_TOKEN').secret,
        expiresIn:
          this.configService.get('REFRESH_TOKEN').signOptions.expiresIn,
      },
    );
  }

  async validateLogin(email: string, password: string) {
    const user = await this.userService.getUser(email);
    if (!user || user.password !== password) {
      return null;
    }
    return user;
  }

  generateTokens(req) {
    return {
      access_token: this.generateAccessToken(req),
      refresh_token: this.generateRefreshToken(req),
    };
  }

  getIdFromToken(req) {
    return req.user.id;
  }
}
