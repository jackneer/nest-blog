import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    composer: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column({ default: true})
    isActive: boolean;
}
