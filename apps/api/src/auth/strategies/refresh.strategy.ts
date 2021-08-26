import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'Refresh') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          if (req.cookies?.Authentication) {
            console.log(req.cookies?.Authentication.refresh_token);
            return req.cookies?.Authentication;
          }
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get('REFRESH_TOKEN').secret,
    });
  }

  async validate(payload: any) {
    return { email: payload.email, id: payload.id };
  }
}
