import { Injectable } from '@nestjs/common';

@Injectable()

export class UsersService {
  getCallName(): string {
    return "testing other router!!"
  } 
}
