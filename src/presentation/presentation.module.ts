import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ApplicationModule } from '../application/application.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { JwtStrategy } from './Auth/AuthStrategy/JwtStrategy';
import { LocalStrategy } from './Auth/AuthStrategy/LocalStrategy';
import { RolesGuard } from './Authorization/Guard/Roles.Guard';
import { UserController } from './controller/user/user.controller';


@Module({
  controllers: [UserController],
  providers:[LocalStrategy,JwtStrategy,],
  imports: [InfrastructureModule, ApplicationModule],
})
export class PresentationModule {}
