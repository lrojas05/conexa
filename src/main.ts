import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.getHttpAdapter().getInstance().disable('x-powered-by');

  const config = new DocumentBuilder()
    .setTitle('movie-manager Test')
    .setDescription('App que permite gestionar películas')
    .setVersion('1.0')
    .addTag('Films')
    .build();
  const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document, {
    customCssUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
    ],
   });
  app.useGlobalPipes(new ValidationPipe({
    transform :  true,
    whitelist : true,
  }));

  
await app.listen(process.env.PORT, process.env.HOSTNAME);
}
bootstrap();
