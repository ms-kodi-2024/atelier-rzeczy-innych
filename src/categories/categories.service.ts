import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return this.prisma.category.findMany();
  }

  async getBySlug(slug: string) {
    return this.prisma.category.findUnique({
      where: { slug },
    });
  }
}
