import  {IsString, IsEmail, IsStrongPassword, isStrongPassword} from 'class-validator'


export class CreateUserDto {
  @IsEmail()
  email: string;
  
  @IsStrongPassword()
  password: string;
}