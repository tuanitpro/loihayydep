import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1', {
    exclude: [
      { path: '/', method: RequestMethod.GET },
      { path: 'swagger', method: RequestMethod.GET },
    ],
  })
  const allowedOrigin = process.env.ALLOWED_ORIGINS_CORS || 'http://localhost:3000,https://loihayydep.tuanitpro.com'
  const allowedOrigins = allowedOrigin.split(',')
  const corsOptions = {
    origin: allowedOrigins,
    allowedHeaders:
      'Access-Control-Allow-Headers, X-Requested-With, X-HTTP-Method-Override,  Cache-Control, Content-Type, Accept, Observe, Authorization, hash-referer, x-requested-with, x-xsrf-token, X-XSRF-TOKEN',
    methods: 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  }

  app.enableCors(corsOptions)
  await app.listen(3500);
}
bootstrap();
