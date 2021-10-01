import {
  Controller,
  Get,
  Req,
  UseGuards,
  Res,
  Post,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user/user.service';
import { Log } from '@prisma/client';
import { DbService } from '../db';

@Controller('log')
export class LogController {
  constructor(
    private userService: UserService,
    private dbService: DbService,
    private configService: ConfigService,
  ) {}

  @Post()
  @UseGuards(AuthGuard('Access'))
  async addLog(@Req() req, @Body() payload): Promise<Log> {
    return this.dbService.log.create({
      data: { ...payload, userId: req.user.id },
    });
  }

  @Get()
  @UseGuards(AuthGuard('Access'))
  async getLog(@Req() req): Promise<Log[]> {
    return this.dbService.log.findMany({ where: { userId: req.user.id } });
  }
}
