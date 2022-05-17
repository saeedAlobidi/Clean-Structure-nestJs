export default interface IGenericRepository<T> {
  GetQueryBuilder(queryBuilderAlias: string);

  BuildQueryBuild(queryBuilderAlias: string);

  Pagination(index: number, size: number);

  GetByIdPromise(id);

  GetQuery(query: string);

  GetAllPromise();

  AddPromise(entity: T);

  UpdatePromise(entity: T);

  DeletePromise(entity: T);
  
 Sendchannel (entity:any);
}
