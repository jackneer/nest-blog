import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { ExecutionInterceptor } from './interceptors/execution.interceptor';

@Module({
  imports: [ TypeOrmModule.forRoot(), ScheduleModule.forRoot(), UsersModule, PostsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService, ExecutionInterceptor],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
