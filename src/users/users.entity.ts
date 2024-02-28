import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

// I will put together other way to interceptions my password and this stuff like that
// this ia my database strucuture!
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;
}
