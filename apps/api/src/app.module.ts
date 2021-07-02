import { Module } from '@nestjs/common';
import { UserModule } from './user';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db';
import { GoogleModule } from './google';
import { AuthModule } from './auth';
import { UserController } from './user/user.controller';
import configuration from './config/configuration';
import { WeightinModule } from './weightin/weightin.module';
@Module({
  imports: [
    DbModule,
    ConfigModule.forRoot({
      load: [configuration]
    }),
    UserModule,
    ConfigModule,
    GoogleModule,
    AuthModule,
    WeightinModule,
  ],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
