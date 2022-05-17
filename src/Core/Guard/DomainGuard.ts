import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class DomainGuard implements CanActivate {
  async validateRequest(request, response): Promise<boolean> {
    //you can check if this domain authorizeq
    console.log('Global--Guard');
    return true;
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const getResponse = context.switchToHttp().getResponse();
    return this.validateRequest(request, getResponse);
  }
}
