import { Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserInterface } from '../types';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('find')
  getUsers(@Query('limit') limit: number) {
    return this.userService.getUsers(Number(limit));
  }
  @Post('create')
  createUser(@Query('firstName') firstName: string, @Query('lastName') lastName: string, @Query('age') age: number) {
    const user: UserInterface = {firstName, lastName, age};
    return this.userService.createUser(user);
  }
}
