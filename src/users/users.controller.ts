import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller()
export class UsersController {
     
    @Get("auth")
    getTesting() {
      console.log('testing')
    }  
    
    @Post("auth/singup") 
    getCallName(@Body() body:CreateUserDto ){
      console.log(body)
    }

}
