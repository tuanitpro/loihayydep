import { Controller, Get, Logger, Res, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { QuoteService } from '../services/quote.service';
import { Response } from 'express';

@Controller({
  path: 'quote',
  version: [VERSION_NEUTRAL, '1', '2'],
})
export class QuoteController {
  private readonly logger = new Logger(QuoteController.name);
  constructor(private readonly quoteService: QuoteService) {}

  @Get('search')
  @Version('1')
  @Version(VERSION_NEUTRAL)
  async findAll(@Res() response: Response): Promise<any> {
    this.logger.log('findAll')
    const results = await this.quoteService.findAll(null);

    return response.status(200).json(results);
  }
}
