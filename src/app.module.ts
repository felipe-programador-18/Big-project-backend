import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "src/users/users.entity"



@Module({
  imports: [TypeOrmModule.forRoot({ 
    type:"sqlite",
    database:"db.sqlite",
    entities:[User],
    synchronize: true,
  }) ,  UsersModule, ReportsModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
