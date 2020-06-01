import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    composer: number;

    @ApiProperty()
    @Column()
    postId: number;

    @ApiProperty()
    @Column()
    commentId: number;

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
