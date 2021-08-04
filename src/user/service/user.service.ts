import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers = (limit?: number) => {
    return [];
  };
}
