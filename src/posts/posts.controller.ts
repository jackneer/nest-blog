import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { create } from 'domain';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {

    @Get()
    findAll(): string {
      return 'find all';
    }

    @Get('recent')
    getRecent(): string {
        return 'recent';
    }

    @Get('hot')
    getHot(): string {
        return 'hot';
    }

    @Post()
    create(): string {
      return 'create';
    }

    @Put()
    update(): string {
      return 'update';
    }

    @Delete()
    delete(): string {
      return 'delete';
    }
    
}
