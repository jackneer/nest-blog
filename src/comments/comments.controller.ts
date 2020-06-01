import { Controller, Get, Put, Delete, Post, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { Comment } from './comment.entity';
import { DeleteResult } from 'typeorm';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
    constructor(private commentService: CommentsService) {}

  @Get(':postId')
  @ApiOperation({summary: 'get comments of post by postId', description: ''})
  findByPostId(@Param('postId') postId: number): Promise<Comment[]> {
      return this.commentService.findByPostId(postId);
  }

  @Post()
  @ApiOperation({summary: 'create a comment', description: ''})
  create(@Body() comment: Comment): Promise<Comment> {
      return this.commentService.create(comment);
  }

  @Put(':id')
  @ApiOperation({summary: 'update a comment', description: ''})
  update(@Param('id') id: number, @Body() comment: Comment): Promise<Comment>  {
      return this.commentService.update(id, comment);
  }

  @Delete(':id')
  @ApiOperation({summary: 'delete a comment', description: ''})
  delete(@Param('id') id: number): Promise<DeleteResult> {
      return this.commentService.delete(id);
  }
}
