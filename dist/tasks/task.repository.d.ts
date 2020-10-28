import { CreateTaskDto, GetFilterTasks } from './dto';
import { Task } from './task.entity';
import { Repository } from "typeorm";
export declare class TaskReprository extends Repository<Task> {
    getTasks(filterQuery: GetFilterTasks): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
