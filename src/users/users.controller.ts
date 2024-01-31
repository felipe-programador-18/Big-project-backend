import { Controller, Post, Body, Get, Query, Delete, Patch, Param, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "src/users/dtos/update-user.dto";
import { Not } from "typeorm";

@Controller("auth")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post("/signup")
  getCallName(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  @Get("/:id")
  async findUser(@Param("id") id: string) {
    const user = await this.userService.findOne(parseInt(id));

    // just to check if have user or not
    if (!user) {
      throw new NotFoundException("user not found here");
    }

    return user;
  }

  @Get()
  findAll(@Query("email") email: string) {
    return this.userService.find(email);
  }

  @Delete("/:id")
  removeUser(@Param("id") id: string) {
    return this.userService.remove(parseInt(id));
  }

  // this is my update
  @Patch("/:id")
  updateUser(@Param("id") id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }
}
