import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';
import { UserInterface } from '../types';

@Entity()
export class UserEntity implements UserInterface {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
