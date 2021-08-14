import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import {
  AccessStrategy,
  RefreshStrategy,
  GoogleStrategy,
  FacebookStrategy,
} from './strategies';

@Module({
  imports: [ConfigModule, UserModule, JwtModule.register({})],
  exports: [AuthService],
  providers: [
    AuthService,
    AccessStrategy,
    RefreshStrategy,
    GoogleStrategy,
    FacebookStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
