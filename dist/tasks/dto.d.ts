import { TaskStatus } from "./taskStatus.enum";
export declare class CreateTaskDto {
    title: string;
    description: string;
}
export declare class GetFilterTasks {
    status: TaskStatus;
    search: string;
}
