import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid } from 'uuid'
import { CreateTaskDto, GetFilterTasks } from './dto'

@Injectable()
export class TasksService {

    private tasks:Task[] = [];

    getAllTasks():Task[]{
        return this.tasks
    }

    getFilteredTasks(filterQuery:GetFilterTasks):Task[]{
        const {status, search} = filterQuery;

        let tasks = this.tasks;

        if(status){
            tasks = tasks.filter(task => task.status === status)
        }

        if(search){
            tasks = tasks.filter(task =>  
                task.title.includes(search) ||
                task.description.includes(search) 
            )
            console.log(search)
        }

        return tasks
    }
 
    getOneTask(id:string):Task {
        const found =this.tasks.find(task => task.id === id);

        if(!found){
            throw new NotFoundException(`Can't find task with ${id} id`)
        }

        return found
        
        
    }

    updataTaskStatus(id:string, status: TaskStatus):Task{
        const task = this.getOneTask(id);
        
        if(task){
            task.status = status;
        }
        
        return task
    }

    createNewTask(createTaskDto: CreateTaskDto): Task {
        const {title, description } = createTaskDto;
        
        const task:Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        }
    
        this.tasks.push(task)

        return task
    }

    deleteTask (id:string):void {
        const found = this.getOneTask(id)

        this.tasks = this.tasks.filter(task => task.id !== found.id);
     }
}
