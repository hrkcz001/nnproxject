import { Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('')
  getUsers(@Query('limit') limit: number) {
    return this.userService.getUsers(Number(limit));
  }
  @Post()
  createUser() {
    return this.userService.createUser({
      firstName: 'Test 3',
      lastName: 'Test 3',
      age: 2,
    });
  }
}
