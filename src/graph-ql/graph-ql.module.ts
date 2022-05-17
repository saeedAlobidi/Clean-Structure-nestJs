import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApplicationModule } from 'src/application/application.module';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { UserResolver } from './Graph.ql.Resolver';

@Module({

    imports: [InfrastructureModule, ApplicationModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: join(process.cwd(), 'src/domain/Schema/schema.gql'),
      })],
      providers: [UserResolver],

})
export class GraphQlModule {}
