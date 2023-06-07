import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
 
  getCallName(): string {
    return "just testing my router"
  } 

}
