import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return this.prisma.order.findMany();
  }

  async create(data: any) {
    const lastOrder = await this.prisma.order.findFirst({
      orderBy: { orderNumber: 'desc' },
    });

    const nextOrderNumber = lastOrder ? lastOrder.orderNumber + 1 : 1000;

    return this.prisma.order.create({
      data: {
        ...data,
        orderNumber: nextOrderNumber,
      },
    });
  }
}
