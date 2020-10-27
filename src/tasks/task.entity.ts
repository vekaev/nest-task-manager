import { TaskStatus } from './taskStatus.enum';
import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class Task extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}