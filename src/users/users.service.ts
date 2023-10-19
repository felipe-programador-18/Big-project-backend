import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';



@Injectable()
export class UsersService  {
   constructor(@InjectRepository(User) private repo: Repository<User>){}
    
    create(email:string , password:string) {
      
      const user = this.repo.create({email,password})
      return this.repo.save(user)
   
    }
  
}
