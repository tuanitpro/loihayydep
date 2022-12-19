import { Controller, Get, Res } from '@nestjs/common';
import { QuoteService } from 'src/services/quote.service';
import { Response } from 'express';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get('search')
  async findAll(@Res() response: Response): Promise<any> {
    const results = await this.quoteService.findAll(null);

    return response.status(200).json(results);
  }
}
