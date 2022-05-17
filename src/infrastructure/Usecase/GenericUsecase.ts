import IUsecae from 'src/application/Interfaces/Usecase/IUsecae';
import IGenericRepository from '../../Application/Interfaces/Repositories/IGenericRepository';

export default class GenericUsecase<T> implements IUsecae {

  constructor(){
   
   
  }
  getddl(req: any, res: any) {
    throw new Error('Method not implemented.');
  }
  async get(req: any, res: any) {
    throw new Error('Method not implemented.');
  }
  async set(req: any, res: any) {
    throw new Error('Method not implemented.');
  }
  async update(req: any, res: any) {
    throw new Error('Method not implemented.');
  }
  async delete(req: any, res: any) {
    throw new Error('Method not implemented.');
  }
}
