import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.entity';
import { Post } from 'src/posts/post.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  composerId: number;

  @ManyToOne(() => User, composer => composer.id)
  @JoinColumn({name: 'composerId', referencedColumnName: 'id'})
  composer: User;

  @ApiProperty()
  @Column()
  postId: number;

  @ManyToOne(() => Post, post => post.id)
  @JoinColumn({name: 'postId', referencedColumnName: 'id'})
  post: Post;

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
