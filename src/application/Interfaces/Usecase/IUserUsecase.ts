import { HttpStatus } from '@nestjs/common';
import User from 'src/domain/Entities/User';

export interface IUserUsecase {
  GetUsers(): Promise<any>;
  addUser(UserTdo): Promise<any>;
  login(user: any)
  GetHelloMessage():Promise<any>;
}
