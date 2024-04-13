import { Controller, Post, Body, Get, Query, Delete, Patch, Param, NotFoundException, UseInterceptors } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "src/users/dtos/update-user.dto";
import { SerialiazeInterceptor } from "src/interceptors/serialize.interceptor";
import { UserDto } from "./dtos/user-dto";

@Controller("auth")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post("/signup")
  getCallName(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  // this tool is amazing to avoid show more that allowed

  // I will to transform this on new serializeintercptor
  @UseInterceptors(new SerialiazeInterceptor(UserDto))
  @Get("/:id")
  async findUser(@Param("id") id: string) {
    console.log("handler its running now");
    const user = await this.userService.findOne(parseInt(id));

    // just to check if have user or not
    if (!user) {
      throw new NotFoundException("user not found here");
    }

    return user;
  }

  // to find my all date
  @Get()
  findAll(@Query("email") email: string) {
    return this.userService.find(email);
  }

  // to delete my data
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
