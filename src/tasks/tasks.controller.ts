import { Task } from './task.entity';
import { ValidateTaskStatusPipe } from './validation.pipe';
import { Body, Controller, Delete, Get, Param, Post, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import  {CreateTaskDto, GetFilterTasks}  from './dto'
import { TaskStatus} from './taskStatus.enum';


@Controller('tasks')
export class TasksController {
    constructor(
        private taskService: TasksService
        
        ){}

    @Get()
    getTasks(@Query(ValidationPipe) filterQuery: GetFilterTasks ): Promise<Task[]> {
        return this.taskService.getTasks(filterQuery)
    }

    @Get(':id')
    getOneTask(@Param('id', ParseIntPipe) id:number): Promise<Task>{
        return this.taskService.getOneTask(id)
    }
    
    @Post()
    @UsePipes(ValidationPipe)
    createNewTask(@Body() createTaskDto: CreateTaskDto): Promise<Task>{
        return this.taskService.createTask(createTaskDto);
    }

    @Patch(':id/status')
     updateStatus(@Param('id', ParseIntPipe) id:number , @Body('status', ValidateTaskStatusPipe) status: TaskStatus):Promise<Task>{
        return this.taskService.updataTaskStatus(id,status);
    }

    @Delete(':id')
     deleteTask(@Param('id',  ParseIntPipe) id:number): Promise<void>{
        return this.taskService.deleteTask(id)
    }
}
