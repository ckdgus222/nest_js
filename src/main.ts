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
      transformOptions: {
        enableImplicitConversion: true,
      },
      // 데코레이터가 적용 되있지 않은 dto 프로퍼티들을
      // 삭제 해줌.
      // 허가한 쿼리들만 적용.
      whitelist: true,
      // 삭제된 쿼리를 던지면 -> 에러 발생.
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
