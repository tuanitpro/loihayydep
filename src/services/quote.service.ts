import { Injectable, Logger } from '@nestjs/common';

import { quote } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class QuoteService {
  private readonly logger = new Logger(QuoteService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: any): Promise<quote[]> {
    try {
      const results = await this.prisma.quote.findMany();

      return results;
    } catch (error) {
      this.logger.log('findAll:', error);
      return [];
    }
  }
}
