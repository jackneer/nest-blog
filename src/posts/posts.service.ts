import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ) {}

  async findAll(): Promise<Post[]> {
    
    return this.postRepository.find();
    
  }

  async findOne(id: number): Promise<Post> {
    
    return this.postRepository.findOne(id);
  }

  async findRecent(): Promise<Post[]> {
    let query = this.postRepository.createQueryBuilder().orderBy('createdAt', 'DESC').limit(3);

    return query.getMany();
  }

  async create(post: Post) {
    post.createdAt = new Date();

    return this.postRepository.save(post);
  }

  async update(id: number, post: Post) {
    let targetPost = await this.postRepository.findOne(id);
    targetPost.composer = post.composer;
    targetPost.title = post.title;
    targetPost.content = post.content;
    targetPost.isActive = post.isActive;

    return this.postRepository.save(targetPost);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.postRepository.delete(id);
  }
}
