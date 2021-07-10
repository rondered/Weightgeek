import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { User } from '@prisma/client';
import { DbService } from '../db/db.service';

@Injectable()
export class UserService implements OnModuleInit {
  context: string;
  loggerService: Logger;

  constructor(private dbService: DbService) {
    this.loggerService = new Logger('UserService');
  }

  onModuleInit() {
    this.loggerService.log('Service started!', this.context);
  }

  async signUp(email: string, google_id?: string) {
    const signedUpUser = await this.dbService.user.create({
      data: { email, google_id },
    });
    return signedUpUser;
  }

  async getUser(email: string) {
    return this.dbService.user.findUnique({ where: { email } });
  }

  async loginOrSignUp(loginPayload: {
    email: string;
    google_id?: string;
    password?: string;
  }): Promise<User> {
    const foundUser = await this.getUser(loginPayload.email);
    if (foundUser) {
      return foundUser;
    }
    return this.dbService.user.create({ data: loginPayload });
  }
}
