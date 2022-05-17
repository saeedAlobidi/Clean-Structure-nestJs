import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  beforRequest(context: ExecutionContext) {
    const response = context.switchToHttp().getResponse();
    const request = context.switchToHttp().getRequest();
    console.log('Controller Interceptor request');
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.beforRequest(context);

    return next.handle().pipe(
      tap((reponse) => {
        console.log('Controller Interceptor reponse');
      }),
    );
  }
}
