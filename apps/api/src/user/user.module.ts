import { Module } from '@nestjs/common';
import { DbModule } from '../db';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DbModule, ConfigModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
