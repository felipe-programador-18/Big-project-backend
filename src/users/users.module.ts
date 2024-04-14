import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { CreateUserDto } from "./dtos/create-user.dto";
import { AuthService } from "src/auth/auth.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],

  controllers: [UsersController],
  providers: [UsersService, CreateUserDto, AuthService],
})
export class UsersModule {}
