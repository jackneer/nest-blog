import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, composer => composer.id)
  composer: User;

  @ApiProperty()
  @Column({type: 'varchar', length: 100})
  title: string;

  @ApiProperty()
  @Column({type: 'text'})
  content: string;

  @Column()
  createdAt: Date;

  @ApiProperty()
  @Column({default: true})
  isActive: boolean;
}
