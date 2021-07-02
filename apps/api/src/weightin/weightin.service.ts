import { Injectable } from '@nestjs/common';
import { DbService } from '../db';
import { AddWeightInDto } from '../types/dtos';

@Injectable()
export class WeightinService {
  constructor(private dbService: DbService) {}

  async getWeightIns(req) {
    const foundUser = await this.dbService.user.findUnique({
      where: { email: req.user.email },
    });

    return await this.dbService.weightIn.findMany({
      where: { userId: foundUser.id },
    });
  }

  async addWeightIn(userId: string, payload: AddWeightInDto) {
    return this.dbService.weightIn.create({
      data: {
        ...payload,
        userId: userId
      },
    });
  }
}
