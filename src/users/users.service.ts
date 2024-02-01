import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { Not, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { error } from "console";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    console.log("my user is here testing now", user);
    return this.repo.save(user);
  }

  findOne(id: number) {
    //if (!id === null) {
    // return { message: "Id not exists" };
    // }
    return this.repo.findOneBy({ id });
  }

  find(email) {
    return this.repo.find(email);
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException("user not exists");
    }
    Object.assign(user, attrs);

    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException("user not exist");
    }

    return this.repo.remove(user);
  }
}
