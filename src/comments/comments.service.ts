import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>
  ) {}

  async findByPostId(postId: number): Promise<Comment[]> {
    let query = this.commentRepository.createQueryBuilder().where('Comment.postId = :postId', {postId: postId});
    return query.getMany();
  }

  async create(comment: Comment): Promise<Comment> {
    comment.createdAt = new Date();
    return this.commentRepository.save(comment);
  }

  async update(id: number, comment: Comment): Promise<Comment> {
    let targetComment = await this.commentRepository.findOneOrFail(id);
    targetComment.content = comment.content;

    return this.commentRepository.save(targetComment);
  }

  async delete(id: number): Promise<DeleteResult>{
    return this.commentRepository.delete(id);
  }
}
