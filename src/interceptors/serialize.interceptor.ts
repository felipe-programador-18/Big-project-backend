import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

// putting together glabally structure to manage my data
export class SerialiazeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> {
    //  run something before a resquest is handled
    // by the request handler

    console.log("I runnning before the handler", context);

    return handler.handle().pipe(
      map((data: any) => {
        // Im running before the sent out request
        console.log("running before sent out", data);
      })
    );
  }
}
