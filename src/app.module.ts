import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { QuoteController } from './controllers/quote.controller';
import { CategoryService } from './services/category.service';
import { PrismaService } from './services/prisma.service';
import { QuoteService } from './services/quote.service';

@Module({
  imports: [],
  controllers: [QuoteController, CategoryController],
  providers: [PrismaService, QuoteService, CategoryService],
})
export class AppModule {}
