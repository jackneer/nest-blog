import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { DataExceptionFilterFilter } from './filters/data-exception-filter.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters( new DataExceptionFilterFilter());

  const options = new DocumentBuilder()
    .setTitle('nest-blog')
    .setDescription('API description of nest-blog')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [UsersModule, PostsModule, CommentsModule],
  });
  
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000, () => {
    console.log('api docs is available at http://localhost:3000/api-docs')
  });
}
bootstrap();
