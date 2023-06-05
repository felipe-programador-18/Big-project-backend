import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';


@Controller('auth')
export class UsersController {

    @Post("/singup") 
    createUser( @Body() body:CreateUserDto ){
      console.log(`------ body here ${body} ------`)
    }

}
