import { Task, TaskStatus } from './task.model';
import { CreateTaskDto, GetFilterTasks } from './dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getFilteredTasks(filterQuery: GetFilterTasks): Task[];
    getOneTask(id: string): Task;
    updataTaskStatus(id: string, status: TaskStatus): Task;
    createNewTask(createTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
}
