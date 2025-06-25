import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';

@Injectable()
export class SliderService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return this.prisma.slider.findMany();
  }
}
