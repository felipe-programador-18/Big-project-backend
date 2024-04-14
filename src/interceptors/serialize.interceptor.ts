import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";
//import { UserDto } from "src/users/dtos/user-dto";

export function Serialize(dto: any) {
  return UseInterceptors(new SerialiazeInterceptor(dto));
}

// putting together glabally structure to manage my data
export class SerialiazeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  // to pay attention about this  at this case I Just to created a class to manage and receive my intercept method
  intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }
}
