import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return this.prisma.product.findMany();
  }

  async getBySlug(slug: string) {
    return this.prisma.product.findUnique({
      where: { slug },
    });
  }
}
