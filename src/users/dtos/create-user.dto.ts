import { IsString, IsEmail, IsStrongPassword, isStrongPassword, isNumber, IsNumber } from "class-validator";

// just small structure to come back put my hands on code!!!

export class CreateUserDto {
  id: number;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
