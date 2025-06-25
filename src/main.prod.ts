import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as express from 'express';
import { join } from 'path';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      credentials: true,
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const expressApp = app.getHttpAdapter().getInstance();
  const clientBuildPath = join(process.cwd(), 'client', 'build');
  expressApp.use(express.static(clientBuildPath));
  expressApp.get('*', (_, res) => {
    res.sendFile(join(clientBuildPath, 'index.html'));
  });

  const port = process.env.PORT || 5000;
  await app.listen(port);
}
bootstrap();
