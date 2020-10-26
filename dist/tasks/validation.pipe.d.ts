import { TaskStatus } from './task.model';
import { PipeTransform } from "@nestjs/common";
export declare class ValidateTaskStatusPipe implements PipeTransform {
    readonly allowedStatuses: TaskStatus[];
    transform(value: any): any;
    private isStatusValid;
}
