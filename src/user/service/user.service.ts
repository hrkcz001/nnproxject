import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { UserInterface } from '../types';
import { ObjectID } from 'mongodb';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  getUsers = async (limit?: number, offset?: number) => {
    return await this.userRepository.find({ skip: offset, take: limit });
  };
  getUsersBy = async (userId: string, firstName: string, lastName: string, age: number) => {
    let user: UserEntity = new UserEntity();
    if(userId)
      user._id = new ObjectID(userId);
    if(firstName)
      user.firstName = firstName;
    if(lastName)
      user.lastName = lastName;
    if(age)
      user.age = age;
    return await this.userRepository.find({where: user});
  };
  createUser = async (user: UserInterface) => {
    return await this.userRepository.save(user);
  };
  deleteUser = async (userId: string) => {
    const user: UserEntity | undefined = await this.userRepository.findOne({_id: new ObjectID(userId)});
    if(!user)
      return {
        "statusCode": 404,
        "message": 'Not found'
      };
    return await this.userRepository.remove(user);
  };
}
