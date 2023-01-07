import {
  Injectable,
  OnModuleInit,
  INestApplication,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaClientOptions } from '@prisma/client/runtime';

@Injectable()
export class PrismaService
  extends PrismaClient<PrismaClientOptions, 'query' | 'info' | 'warn' | 'error'>
  implements OnModuleInit
{
  private readonly logger = new Logger(PrismaService.name);
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'stdout',
          level: 'error',
        },
        {
          emit: 'stdout',
          level: 'info',
        },
        {
          emit: 'stdout',
          level: 'warn',
        },
      ],
    });
    this.$on('query', (e) => {
      this.logger.debug('Query: ' + e.query);
      this.logger.debug('Params: ' + e.params);
      this.logger.debug('Duration: ' + e.duration + 'ms');
    });
  }

  async onModuleInit() {
    this.logger.log('Connect to DB');
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
