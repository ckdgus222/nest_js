import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Nestjs 프로젝트 전체 글로벌 파이프 설정. -> useGlobalPipes
  // 전체 class validator를 실행 시켜주는 파이프 -> ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
