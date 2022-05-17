import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import DbConstraint from './Core/DbConstraint';
 
@Module({
  imports: [TypeOrmModule.forRoot(new DbConstraint()), 
],
  exports: [TypeOrmModule],
})
export class DomainModule {}
