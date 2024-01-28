import { Controller, Post, Body, Get, Query, Delete, Patch, Param } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";

@Controller("auth")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post("/signup")
  getCallName(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  @Get("/:id")
  findUser(@Param("id") id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Get()
  findAll(@Query("email") email: string) {
    return this.userService.find(email);
  }
}
