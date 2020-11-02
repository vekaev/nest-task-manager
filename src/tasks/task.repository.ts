import { User } from './../auth/user.entity';
import { TaskStatus } from './taskStatus.enum';
import { CreateTaskDto, GetFilterTasks } from './dto';
import { Task } from './task.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Task)
export class TaskReprository extends Repository<Task>{
  async getTasks(filterQuery: GetFilterTasks, user: User):Promise<Task[]>{
    const {status, search} = filterQuery;
    const query = this.createQueryBuilder('task');

    query.where('task.userId = :userId', { userId : user.id })

    if(status) {
      query.andWhere('task.status = :status', {status})
    }

    if(search){
      query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', { search : `%${search}%` })
    }

    const tasks = await query.getMany()
    return tasks
  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>{
    const {title, description } = createTaskDto;
    const task  = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    task.user = user;
    
    await task.save()

    // delete task.user

    return task
  }

}