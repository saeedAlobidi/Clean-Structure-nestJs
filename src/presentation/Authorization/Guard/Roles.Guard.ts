import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../../Core/Decorator/Auth.Type';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<String[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log(requiredRoles)
    const { user } = context.switchToHttp().getRequest();

    //here you can check 
    return  true
  }
}