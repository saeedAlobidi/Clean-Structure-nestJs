import {
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  Catch,
} from '@nestjs/common';
import { Request, Response } from 'express';

///@Catch(HttpException)
export class CustomException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    console.log('saeed');
    res.send(JSON.stringify({
      "status":exception.getStatus,
      "message":exception.getResponse,
    }));
  }
}
