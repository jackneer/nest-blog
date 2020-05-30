import { Controller, Get, Put, Delete, Post } from '@nestjs/common';

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
