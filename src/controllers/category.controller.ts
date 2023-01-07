import { Controller, Get, Logger, Res, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { Response } from 'express';

@Controller({
  path: 'category',
  version: [VERSION_NEUTRAL],
})
export class CategoryController {
  private readonly logger = new Logger(CategoryController.name);
  constructor(private readonly categoryService: CategoryService) {}

  @Get('search')
  @Version(VERSION_NEUTRAL)
  async findAll(@Res() response: Response): Promise<any> {
    this.logger.log('findAll')
    const results = await this.categoryService.findAll(null);

    return response.status(200).json(results);
  }
}
