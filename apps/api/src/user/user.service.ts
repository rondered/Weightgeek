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

  async findOrSignUp(email: string): Promise<User> {
    const foundUser = await this.dbService.user.findUnique({
      where: { email: email },
    });
    if (foundUser) {
      return foundUser;
    }
    const newUser = await this.dbService.user.create({
      data: {
        email: email,
      },
    });
    return newUser;
  }
}
