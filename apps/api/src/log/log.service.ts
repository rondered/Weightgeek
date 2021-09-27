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
export class LogService implements OnModuleInit {
  context: string;
  loggerService: Logger;

  constructor(private dbService: DbService) {
    this.loggerService = new Logger('LogService');
  }

  onModuleInit() {
    this.loggerService.log('Service started!', this.context);
  }
}
