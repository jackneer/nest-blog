import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  findOne(@Param('id') id) :Promise<User> {
    return this.usersService.getUser(id);
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  update(@Param('id') id, @Body() user: User): Promise<User> {
    return this.usersService.update(id, user);
  }
}
