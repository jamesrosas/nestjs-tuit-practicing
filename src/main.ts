import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }))
  // es buena practica hacer el uso de whitelist para que nos filtre solo la informacion que se solciita, forbidenNonWhitelisted es opcional para porder lanazar un 400 bad request.

  await app.listen(3000);
}
bootstrap();
