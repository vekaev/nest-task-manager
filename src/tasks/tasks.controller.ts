import { ValidateTaskStatusPipe } from './validation.pipe';
import { Body, Controller, Delete, Get, Param, Post, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import  {CreateTaskDto, GetFilterTasks}  from './dto'
import { Task , TaskStatus} from './task.model';


@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get()
    getAllTasks(@Query(ValidationPipe) filterQuery: GetFilterTasks ): Task[] {
        if(Object.keys(filterQuery).length){
            return this.taskService.getFilteredTasks(filterQuery)
        }else{
            return this.taskService.getAllTasks()
        }
    }

    @Get(':id')
    getOneTask(@Param('id') id:string): Task{

        return this.taskService.getOneTask(id)
    }
    
    @Post()
    @UsePipes(ValidationPipe)
    createNewTask(@Body() createTaskDto: CreateTaskDto): Task{
        return this.taskService.createNewTask(createTaskDto);
    }

    @Patch(':id/status')
     updateStatus(@Param('id') id:string , @Body('status', ValidateTaskStatusPipe) status: TaskStatus):Task{
        return this.taskService.updataTaskStatus(id,status);
    }

    @Delete(':id')
     deleteTask(@Param('id') id:string): void{
        return this.taskService.deleteTask(id)
    }
}
