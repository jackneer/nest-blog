import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  composer: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  content: string;

  @Column()
  createdAt: Date;

  @ApiProperty()
  @Column({ default: true})
  isActive: boolean;
}
