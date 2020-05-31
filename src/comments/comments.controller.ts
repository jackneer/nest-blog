import { Controller, Get, Put, Delete, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {

    @Get(':postId')
    findByPostId(): string {
        return 'find by post id';
    }

    @Post()
    create():string {
        return 'create';
    }

    @Put(':id')
    update(): string {
        return 'updat';
    }

    @Delete(':id')
    delete(): string {
        return 'delete';
    }
}
