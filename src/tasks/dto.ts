import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { TaskStatus } from "./task.model";

export class CreateTaskDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}

export class GetFilterTasks {
    @IsOptional()
    @IsIn([TaskStatus.OPEN,TaskStatus.IN_PROGRESS,TaskStatus.CLOSE])
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}