import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
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

  @Get(':id')
  @ApiOperation({summary: 'get post by id', description: ''})
  findOne(@Param('id') id: number): Promise<BlogPost> {
    return this.postService.findOne(id);
  }

  @Get('user/:userId')
  @ApiOperation({summary: 'get most recently created posts', description: ''})
  getByUser(@Param('userId') userId: number): Promise<BlogPost[]> {
      return this.postService.findByUser(userId);
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
