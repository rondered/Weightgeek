import { Module } from '@nestjs/common';
import { GoogleController } from './google.controller';
import { AuthModule } from '../auth';
import { GoogleStrategy } from './strategies/google.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule,ConfigModule],
  providers: [GoogleStrategy],
  controllers: [GoogleController],
})
export class GoogleModule {}
