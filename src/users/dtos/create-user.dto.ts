import  {IsString, IsEmail, IsStrongPassword, isStrongPassword} from 'class-validator'


// just small structure to come back put my hands on code!!!

export class CreateUserDto {
  @IsEmail()
  email: string;
  
  @IsStrongPassword()
  password: string;
}