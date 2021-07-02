import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DbService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  logger: Logger;

  constructor() {
    super(
      process.env.DATASOURCE_URL
        ? {
            datasources: {
              db: {
                url: process.env.DATASOURCE_URL,
              },
            },
          }
        : undefined,
    );

    this.logger = new Logger('DbService');
  }

  async onModuleInit() {
    this.logger.log('Service started!');
    try {
      await this.$connect();
      this.logger.log('Service connected!');
    } catch (error) {
      this.logger.error(`Problem with connecting: ${error}`, undefined);
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      this.logger.log('Service disconnected!');
    } catch (error) {
      this.logger.error(`Problem with disconnecting: ${error}`, undefined);
    }
  }
}
