// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Habilita CORS para permitir requisições de diferentes origens
  await app.listen(3000); // Inicia o servidor na porta 3000
}
bootstrap();
