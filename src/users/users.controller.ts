import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity'
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({summary: 'get all users', description: ''})
  findAll(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  @ApiOperation({summary: 'get one user by id', description: ''})
  @ApiParam({name: 'id', type: 'number'})
  findOne(@Param('id') id) :Promise<User> {
    return this.usersService.getUser(id);
  }

  @Post()
  @ApiOperation({summary: 'create an user', description: ''})
  create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  @ApiOperation({summary: 'update an user', description: ''})
  @ApiParam({name: 'id', type: 'number'})
  update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.usersService.update(id, user);
  }
}
