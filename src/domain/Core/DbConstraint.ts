import { BaseEntity } from 'typeorm';
import user from '../Entities/User';
export default class DbConstraint {
  type: any = 'mssql';
  host: any = '127.0.0.1';
  username: any = 'mms';
  password: any = 'mms';
  database: any = 'nestJs';
  entities: any = [user];
  synchronize: any = false;
  logging: any = false;
  extra: any = { trustServerCertificate: true };

  constructor() {}
}
