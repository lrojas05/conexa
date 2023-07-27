import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.getHttpAdapter().getInstance().disable('x-powered-by');
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true }));

  const config = new DocumentBuilder()
    .setTitle('Conexa Test')
    .setDescription('App que permite gestionar películas')
    .setVersion('1.0')
    .addTag('Films')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/', app, document);

  await app.listen(3000);
}
bootstrap();
