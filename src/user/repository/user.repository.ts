import { EntityRepository, MongoRepository, Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends MongoRepository<UserEntity> {}
