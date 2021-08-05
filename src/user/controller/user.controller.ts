import { Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserInterface } from '../types';
import { ObjectID } from 'typeorm';
import { identity } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('find')
  getUsers(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.userService.getUsers(Number(limit), Number(offset));
  }
  @Get('findBy')
  getUsersBy(@Query('id') id: string, @Query('firstName') firstName: string, @Query('lastName') lastName: string, @Query('age') age: number){
    return this.userService.getUsersBy(id, firstName, lastName, age);
  }
  @Post('create')
  createUser(@Query('firstName') firstName: string, @Query('lastName') lastName: string, @Query('age') age: number) {
    const user: UserInterface = {firstName, lastName, age};
    return this.userService.createUser(user);
  }
  @Delete('delete')
  deleteUser(@Query('id') id: string){
    return this.userService.deleteUser(id);
  }
}
