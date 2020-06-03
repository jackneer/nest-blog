import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { User } from './user.entity';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class UsersService {

  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUser(id: number): Promise<User> {
    return this.userRepository.findOneOrFail(id);
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: User): Promise<User> {
    const targetUser = await this.getUser(id);
    targetUser.username = user.username;
    targetUser.password = user.password;
    targetUser.isActive = user.isActive;
    return this.userRepository.save(targetUser);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }

  @Cron('0 * * * * *')
  doSomething() {
    this.logger.debug("This is a scheduled task for doing something.")
  }
}
