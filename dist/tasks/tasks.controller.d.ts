import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskDto, GetFilterTasks } from './dto';
import { TaskStatus } from './taskStatus.enum';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getTasks(filterQuery: GetFilterTasks): Promise<Task[]>;
    getOneTask(id: number): Promise<Task>;
    createNewTask(createTaskDto: CreateTaskDto): Promise<Task>;
    updateStatus(id: number, status: TaskStatus): Promise<Task>;
    deleteTask(id: number): Promise<void>;
}
