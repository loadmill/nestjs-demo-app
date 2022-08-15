import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const { expressRecorder } = require('@loadmill/node-recorder');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(expressRecorder({
    loadmillCode: process.env.LOADMILL_CODE,
    notSecure: false,
    cookieExpiration: 10 * 60 * 1000,
    basePath: 'http://localhost:3001'
  }));

  await app.listen(3001);
}
bootstrap();
