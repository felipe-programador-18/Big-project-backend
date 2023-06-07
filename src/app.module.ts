import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "src/users/users.entity"
import { Reports } from './reports/reports.entity';
import { UsersController } from './users/users.controller';
import { ReportsController } from './reports/reports.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [TypeOrmModule.forRoot({ 
    type:"sqlite",
    database:"db.sqlite",
    entities:[User, Reports],
    synchronize: true,
  }),UsersModule,  ReportsModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
