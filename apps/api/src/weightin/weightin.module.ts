import { Module } from '@nestjs/common';
import { WeightinService } from './weightin.service';
import { WeightinController } from './weightin.controller';
import { DbModule } from '../db';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule, RefreshStrategy } from '../auth';

@Module({
  imports: [DbModule, UserModule, ConfigModule, AuthModule],
  providers: [WeightinService, RefreshStrategy],
  controllers: [WeightinController],
})
export class WeightinModule {}
