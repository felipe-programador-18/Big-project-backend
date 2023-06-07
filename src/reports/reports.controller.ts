import { Controller, Get } from '@nestjs/common';

@Controller("reports")
export class ReportsController {
 
  @Get("test")
  createJust() {
    console.log("testing my reports here what i have to change")
  }

}
