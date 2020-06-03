import { Entity, PrimaryGeneratedColumn, Column, Exclusion } from 'typeorm';
import { ApiProperty, ApiExcludeEndpoint } from '@nestjs/swagger';

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
  @Column()
  birthday: Date;

  @ApiProperty()
  @Column('int')
  age: number;
  
  @ApiProperty()
  @Column({ default: true})
  isActive: boolean;
}
