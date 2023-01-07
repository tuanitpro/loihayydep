import { Injectable, Logger } from '@nestjs/common';

import { category } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class CategoryService {
  private readonly logger = new Logger(CategoryService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: any): Promise<category[]> {
    try {
      const results = await this.prisma.category.findMany();

      return results;
    } catch (error) {
      this.logger.log('findAll:', error);
      return [];
    }
  }
}
