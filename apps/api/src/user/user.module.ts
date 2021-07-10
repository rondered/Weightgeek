import { Module, forwardRef } from '@nestjs/common';
import { DbModule } from '../db';
import { UserService } from './user.service';
import { RefreshStrategy, AuthModule } from '../auth';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DbModule, ConfigModule, AuthModule],
  providers: [UserService, RefreshStrategy],
  exports: [UserService],
})
export class UserModule {}
