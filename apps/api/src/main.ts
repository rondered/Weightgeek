import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function main(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true,
    credentials: true,
    methods: 'GET, POST, DELETE, PUT',
  });
  app.use(cookieParser());
  await app.listen(configService.get('API_PORT'));
  const logger = new Logger('WeightgeekBackend');
  logger.log(`Backend running on ${await app.getUrl()}`);
}
main();
