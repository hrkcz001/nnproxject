import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('xui')
  getUsers(@Body('limit') limit: number) {
    return this.userService.getUsers(limit);
  }
}
