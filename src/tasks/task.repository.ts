import { TaskStatus } from './taskStatus.enum';
import { CreateTaskDto, GetFilterTasks } from './dto';
import { Task } from './task.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Task)
export class TaskReprository extends Repository<Task>{
  async getTasks(filterQuery: GetFilterTasks):Promise<Task[]>{
    const {status, search} = filterQuery;
    const query = this.createQueryBuilder('task');

    if(status) {
      query.andWhere('task.status = :status', {status})
    }

    if(search){
      query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', { search : `%${search}%` })
    }

    const tasks = await query.getMany()
    return tasks
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
    const {title, description } = createTaskDto;
    
    const task  = new Task();
     task.title = title;
     task.description = description;
     task.status = TaskStatus.OPEN;
    
    await task.save()

    return task
  }

}