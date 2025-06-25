import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAll() {
    return this.categoriesService.getAll();
  }

  @Get(':slug')
  async getBySlug(@Param('slug') slug: string) {
    const category = await this.categoriesService.getBySlug(slug);
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }
}
