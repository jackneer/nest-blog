import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({type: 'varchar', length: 100, unique: true})
  username: string;

  @ApiProperty()
  @Column({type: 'varchar', length: 100, select: false})
  password: string;
  
  @ApiProperty()
  @Column({ default: true})
  isActive: boolean;
}
