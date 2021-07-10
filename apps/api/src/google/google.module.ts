import { Module, forwardRef } from '@nestjs/common';
import { GoogleController } from './google.controller';
import { AuthModule } from '../auth';
import { UserModule } from '../user';
import { GoogleStrategy } from './strategies/google.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, forwardRef(() => UserModule), ConfigModule],
  providers: [GoogleStrategy],
  controllers: [GoogleController],
})
export class GoogleModule {}
