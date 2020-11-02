import { User } from './../auth/user.entity';
import { TaskStatus } from './taskStatus.enum';
import { BaseEntity } from "typeorm";
export declare class Task extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    user: User;
}
