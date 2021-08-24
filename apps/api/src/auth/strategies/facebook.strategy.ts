import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-facebook';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../../user/user.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'Facebook') {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      clientID: configService.get('FACEBOOK_CLIENT_ID'),
      clientSecret: configService.get('FACEBOOK_CLIENT_SECRET'),
      callbackURL: `${configService.get('API_URL')}/auth/facebook/redirect`,
      scope: 'email',
      profileFields: ['emails', 'name', 'picture.type(large)'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos, id } = profile;
    const user: any = {
      id,
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      profile_photo: photos.length > 0 ? photos[0].value : undefined,
      accessToken,
    };
    const userInDb = await this.userService.loginOrSignUp({
      facebook_id: user.id,
      profile_photo: user.profile_photo,
    });
    user.id = userInDb.id;
    done(null, user);
  }
}
