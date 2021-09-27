import { Module } from '@nestjs/common';
import { DbModule } from '../db';
import { ConfigModule } from '@nestjs/config';
import { LogService } from './log.service';

@Module({
  imports: [DbModule, ConfigModule],
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {}
