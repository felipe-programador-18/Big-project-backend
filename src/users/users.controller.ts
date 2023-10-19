import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';



@Controller("auth")
export class UsersController {
     
  constructor(private userService: UsersService){}
    
    @Post("singup") 
    getCallName(@Body() body:CreateUserDto ){
      this.userService.create(body.email, body.password)
      console.log(body)
    }

}
