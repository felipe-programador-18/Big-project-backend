import {Entity , Column, PrimaryGeneratedColumn}  from "typeorm"

@Entity()

   export class Reports {
      @PrimaryGeneratedColumn()
      id: string ;
      
      @Column()
      price:number;

   }