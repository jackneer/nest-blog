import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    composer: number;

    @Column()
    toPost: number;

    @Column()
    toComment: number;

    @Column()
    content: string;

    @Column({ default: true})
    isActive: boolean;
}
