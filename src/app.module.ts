import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { PresentationModule } from './presentation/presentation.module';
import { GraphQlModule } from './graph-ql/graph-ql.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { RedisModule } from 'src/pub-sub/redis.module';

@Module({
  imports: [
    RedisModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/domain/Schema/schema.gql'),
    }),
    DomainModule,
    ApplicationModule,
    InfrastructureModule,
    PresentationModule,
    GraphQlModule,
    
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
