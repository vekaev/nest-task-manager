import { TasksService } from './tasks.service';
import { CreateTaskDto, GetFilterTasks } from './dto';
import { Task, TaskStatus } from './task.model';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(filterQuery: GetFilterTasks): Task[];
    getOneTask(id: string): Task;
    createNewTask(createTaskDto: CreateTaskDto): Task;
    updateStatus(id: string, status: TaskStatus): Task;
    deleteTask(id: string): void;
}
