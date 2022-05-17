import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class DomainGuard implements CanActivate {
  async validateRequest(request): Promise<boolean> {
    //you can check if this domain authorize
    console.log('Controller--Guard');
    return true;
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
}
