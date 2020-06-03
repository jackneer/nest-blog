import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ExecutionInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ExecutionInterceptor.name);
  
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    return next.handle().pipe(tap(() => 
      this.logger.debug(context.getClass().name + ' ' + context.getHandler().name + ' ' + (Date.now() - now)+ ' ms')
    ));
  }
}
