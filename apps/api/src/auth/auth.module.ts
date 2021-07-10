import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { GoogleStrategy } from '../google';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from '../user';
import { AccessStrategy, RefreshStrategy } from './strategies';

@Module({
  imports: [
    ConfigModule,
    forwardRef(() => UserModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return { ...configService.get('ACCESS_TOKEN') };
      },
    }),
  ],
  exports: [AuthService],
  providers: [AuthService, AccessStrategy, RefreshStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
