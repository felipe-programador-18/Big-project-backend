import { Expose } from "class-transformer";

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  // eslint-disable-next-line prettier/prettier
    email:string
}
