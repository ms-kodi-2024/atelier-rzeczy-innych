import { Module } from '@nestjs/common';
import { SliderController } from './slider.controller';
import { SliderService } from './slider.service';
import { PrismaService } from '../shared/prisma.service';

@Module({
  controllers: [SliderController],
  providers: [SliderService, PrismaService],
})
export class SliderModule {}
