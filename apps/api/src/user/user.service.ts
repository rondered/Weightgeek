import {
  Injectable,
  OnModuleInit,
  Logger,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { DbService } from '../db/db.service';
import { hashSync, compareSync } from 'bcrypt';

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

  async signUp(email: string, password?: string, google_id?: string) {
    const alreadySignedUpUser = await this.dbService.user.findFirst({
      where: { email },
    });
    if (alreadySignedUpUser) {
      throw new ForbiddenException('User already exists!');
    }
    if (password) {
      password = hashSync(password, 10);
    }
    const signedUpUser = await this.dbService.user.create({
      data: { email, google_id, password },
    });
    return signedUpUser;
  }

  async getUser(payload: any) {
    return this.dbService.user.findUnique({ where: payload });
  }

  async login(email: string, password: string) {
    const user = await this.getUser({ email });
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    if (!compareSync(password, user.password)) {
      throw new ForbiddenException('Incorrect password');
    }
    return user;
  }

  async loginOrSignUp(
    email: string,
    password?: string,
    google_id?: string,
  ): Promise<User> {
    const foundUser = await this.getUser({ email });
    if (foundUser) {
      return foundUser;
    }
    return this.signUp(email, password, google_id);
  }
}
