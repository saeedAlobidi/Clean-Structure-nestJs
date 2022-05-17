import GenericRepository from './GenericRepository';
import { Injectable } from '@nestjs/common';
import User from 'src/domain/Entities/User';
import IUser from 'src/application/Interfaces/Repositories/IUser';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export default class UserRepository
  extends GenericRepository<User>
  implements IUser
{
  constructor(@InjectRepository(User) usersRepository: Repository<User>) {
    super(usersRepository);
  }
}
