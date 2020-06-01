import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({length: 100, unique: true})
  username: string;

  @ApiProperty()
  @Column({length: 100})
  password: string;

  @ApiProperty()
  @Column()
  birthday: Date;

  @ApiProperty()
  @Column('int')
  age: number;
  
  @ApiProperty()
  @Column({ default: true})
  isActive: boolean;
}
