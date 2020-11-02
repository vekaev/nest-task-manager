import { User } from './../auth/user.entity';
import { Task } from './task.entity';
import { TaskReprository } from './task.repository';
import { TaskStatus } from './taskStatus.enum';
import { CreateTaskDto, GetFilterTasks } from './dto';
export declare class TasksService {
    private taskReprository;
    constructor(taskReprository: TaskReprository);
    getTasks(filterQuery: GetFilterTasks, user: User): Promise<Task[]>;
    getOneTask(id: number): Promise<Task>;
    updataTaskStatus(id: number, status: TaskStatus): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    deleteTask(id: number): Promise<void>;
}
