import { Controller, Post, Body, Get, Query, Delete, Patch, Param } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";

@Controller("auth")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post("singup")
  getCallName(@Body() body: CreateUserDto) {
    console.log(`------ body here ${body} ------`);
  }

  @Get("/:id")
  findAllUser(@Param("id") id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Get()
  findAll(@Query("email") email: string) {
    return this.userService.find(email);
  }
}
