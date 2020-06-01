import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { create } from 'domain';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { Post as BlogPost } from './post.entity';
import { DeleteResult } from 'typeorm';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  @ApiOperation({summary: 'get all posts', description: ''})
  findAll(): Promise<BlogPost[]> {
    return this.postService.findAll();
  }

  @Get('recent')
  @ApiOperation({summary: 'get most recently created posts', description: ''})
  getRecent(): Promise<BlogPost[]> {
      return this.postService.findRecent();
  }

  @Post()
  @ApiOperation({summary: 'create a post', description: ''})
  create(@Body() post: BlogPost): Promise<BlogPost> {
    
    return this.postService.create(post);
  }

  @Put(':id')
  @ApiOperation({summary: 'update a post', description: ''})
  update(@Param('id') id: number, @Body() post: BlogPost): Promise<BlogPost> {
    return this.postService.update(id, post);
  }

  @Delete(':id')
  @ApiOperation({summary: 'delete a post', description: ''})
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.postService.delete(id);
  }
}
