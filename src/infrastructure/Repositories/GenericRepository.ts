import IGenericRepository from 'src/application/Interfaces/Repositories/IGenericRepository';
import { Repository, SelectQueryBuilder } from 'typeorm';

export default abstract class GenericRepository<T>
  implements IGenericRepository<T>
{
  private query: SelectQueryBuilder<T>;
  constructor(private readonly genericRepository: Repository<T>) {}
 
  async GetQuery(query: string) {
    let data = await this.genericRepository.query(query);
    return data;
  }

  async GetQueryBuilder(queryBuilderAlias: string) {
    this.query = await this.genericRepository.createQueryBuilder(
      queryBuilderAlias,
    );
    return this.query;
  }
  async BuildQueryBuild(queryBuilderAlias: string) {
    this.query = await this.genericRepository.createQueryBuilder(
      queryBuilderAlias,
    );
    return this;
  }

  async Pagination(index: number = 0, size: number = 1) {
    return await this.query.skip(index).take(size).execute();
  }
  async GetByIdPromise(id: any) {
    return this.genericRepository.findByIds([id]);
  }
  async GetAllPromise() {
    return this.genericRepository.find();
  }
  async AddPromise(entity: any) {
    return this.genericRepository.save(entity);
  }
  async UpdatePromise(entity: any) {
    return this.genericRepository.save(entity);
  }

  async DeletePromise(entity: any) {
    return this.genericRepository.delete(entity);
  }

  Sendchannel(entity: any) { 

    
  }
}
