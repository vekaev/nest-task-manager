import { User } from './../auth/user.entity';
import { Task } from './task.entity';
import { TaskReprository } from './task.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import {  TaskStatus } from './taskStatus.enum';
import { CreateTaskDto, GetFilterTasks } from './dto'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskReprository)
        private taskReprository: TaskReprository
    ){}


    async getTasks(filterQuery: GetFilterTasks, user: User):Promise<Task[]>{
        return await this.taskReprository.getTasks(filterQuery, user)
    }
 
    async getOneTask(id:number):Promise<Task> {
        const found = await this.taskReprository.findOne(id);

        if(!found){
            throw new NotFoundException(`Can't find task with ${id} id`)
        }

        return found
    }

    async updataTaskStatus(id:number, status: TaskStatus):Promise<Task> {
        const task = await this.getOneTask(id);
        task.status = status;
        await task.save();
        return task
    }

    async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>{
        return this.taskReprository.createTask(createTaskDto, user)
    }

    async deleteTask (id:number):Promise<void> {
        const result = await this.taskReprository.delete(id);

        if(result.affected === 0){
            throw new NotFoundException(`Can't find task with ${id} id`)
        }
     }
}
