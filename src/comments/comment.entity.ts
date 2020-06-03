import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.entity';
import { getCustomRepositoryToken } from '@nestjs/typeorm';
import { Post } from 'src/posts/post.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, composer => composer.id)
    composer: User;

    @ManyToOne(type => Post, post => post.id)
    post: Post;

    @ManyToOne(type => Comment, comment => comment.id)
    comment: Comment;

    @ApiProperty()
    @Column('text')
    content: string;

    @ApiProperty()
    @Column()
    createdAt: Date;

    @ApiProperty()
    @Column({ default: true})
    isActive: boolean;
}
