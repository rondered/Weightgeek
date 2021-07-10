import {
  Injectable,
  OnModuleInit,
  Logger,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { DbService } from '../db/db.service';
import bcrypt from 'bcrypt';
import { AuthService } from '../auth';

@Injectable()
export class UserService implements OnModuleInit {
  context: string;
  loggerService: Logger;

  constructor(private dbService: DbService, private authService: AuthService) {
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

  async login(email: string, password: string) {
    const user = await this.getUser(email);
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw new ForbiddenException('Incorrect password');
    }
    // to continue...
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
