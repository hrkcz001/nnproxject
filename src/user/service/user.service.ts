import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { UserInterface } from '../types';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  getUsers = async (limit?: number) => {
    return await this.userRepository.find({ take: limit });
  };
  createUser = async (user: UserInterface) => {
    return await this.userRepository.save(user);
  };
}
