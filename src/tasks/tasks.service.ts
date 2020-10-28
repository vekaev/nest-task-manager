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


    async getTasks(filterQuery: GetFilterTasks):Promise<Task[]>{
        return await this.taskReprository.getTasks(filterQuery)
    }

    // getFilteredTasks(filterQuery:GetFilterTasks):Task[]{
    //     const {status, search} = filterQuery;

    //     let tasks = this.tasks;

    //     if(status){
    //         tasks = tasks.filter(task => task.status === status)
    //     }

    //     if(search){
    //         tasks = tasks.filter(task =>  
    //             task.title.includes(search) ||
    //             task.description.includes(search) 
    //         )
    //         console.log(search)
    //     }

    //     return tasks
    // }
 
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

    async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
        return this.taskReprository.createTask(createTaskDto)
    }

    async deleteTask (id:number):Promise<void> {
        const result = await this.taskReprository.delete(id);

        if(result.affected === 0){
            throw new NotFoundException(`Can't find task with ${id} id`)
        }
     }
}
