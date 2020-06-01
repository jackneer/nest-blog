import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  username: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @Column()
  birthday: Date;

  @ApiProperty()
  @Column()
  age: number;
  
  @ApiProperty()
  @Column({ default: true})
  isActive: boolean;
}
