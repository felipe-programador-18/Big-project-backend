import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class UsersController {
  
  @Post("/singup") 
  createUser(){
  
  }

}
