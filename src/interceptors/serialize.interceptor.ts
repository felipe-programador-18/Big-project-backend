import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";
import { UserDto } from "src/users/dtos/user-dto";

// putting together glabally structure to manage my data
export class SerialiazeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        return plainToClass(UserDto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }
}
