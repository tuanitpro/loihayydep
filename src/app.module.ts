import { Module } from '@nestjs/common';
import { QuoteController } from './controllers/quote.controller';
import { PrismaService } from './services/prisma.service';
import { QuoteService } from './services/quote.service';

@Module({
  imports: [],
  controllers: [QuoteController],
  providers: [PrismaService, QuoteService],
})
export class AppModule {}
