import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationModule } from '../application/application.module';
import { DomainModule } from '../domain/domain.module';
import UserRepository from './Repositories/UserRepository';
import LocalResources from './LocalResources/LocalResources';
import UserUsecase from './Usecase/UserUsecase';
import userEntity from 'src/domain/Entities/User';
import { JwtModule } from '@nestjs/jwt';
import {jwtsConstraints} from 'src/application/Constraints/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { redisConfig } from 'src/application/Constraints/redis';

const _redisConfig=new redisConfig()


@Module({
  imports: [
    ClientsModule.register([
      {
        name:"GREETING_SERVICE",
        transport:  Transport.REDIS,
        options: {
          url: 'redis://0.0.0.0:6379',
        }
      },
    ]),
    ApplicationModule,
    DomainModule,
    TypeOrmModule.forFeature([userEntity]),
    JwtModule.register(new jwtsConstraints()),
    
  ],

  providers: [
    {
      provide: 'LocalResources',
      useClass: LocalResources,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    {
      provide: 'IUserUsecase',
      useClass: UserUsecase,
    },
  ],

  exports: [
    {
      provide: 'IUserUsecase',
      useClass: UserUsecase,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
})
export class InfrastructureModule {}
