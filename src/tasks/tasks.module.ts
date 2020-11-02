import { AuthModule } from './../auth/auth.module';
import { TaskReprository } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskReprository]),
    AuthModule,
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
