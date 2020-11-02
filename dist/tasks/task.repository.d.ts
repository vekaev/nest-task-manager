import { User } from './../auth/user.entity';
import { CreateTaskDto, GetFilterTasks } from './dto';
import { Task } from './task.entity';
import { Repository } from "typeorm";
export declare class TaskReprository extends Repository<Task> {
    getTasks(filterQuery: GetFilterTasks, user: User): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
}
