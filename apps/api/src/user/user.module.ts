import { Module } from '@nestjs/common';
import { DbModule } from '../db';
import { UserService } from './user.service';
import { RefreshStrategy } from '../auth';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DbModule, ConfigModule],
  providers: [UserService, RefreshStrategy],
  exports: [UserService],
})
export class UserModule {}
