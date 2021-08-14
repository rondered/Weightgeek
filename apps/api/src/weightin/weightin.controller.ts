import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth';
import { UserService } from '../user/user.service';
import { AddWeightInDto } from '../types/dtos';
import { WeightinService } from './weightin.service';

@Controller('weightin')
export class WeightinController {
  constructor(
    private weightinService: WeightinService,
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('Refresh'))
  getWeightIns(@Request() req) {
    return this.weightinService.getWeightIns(req);
  }

  @Post()
  @UseGuards(AuthGuard('Refresh'))
  async addWeightIn(@Request() req, @Body() addWeightInDto: AddWeightInDto) {
    const id = await this.authService.getIdFromToken(req);
    return this.weightinService.addWeightIn(id, addWeightInDto);
  }
}
