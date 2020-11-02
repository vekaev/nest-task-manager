import { User } from './../auth/user.entity';
import { Task } from './task.entity';
import { ValidateTaskStatusPipe } from './validation.pipe';
import { Body, Controller, Delete, Get, Param, Post, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import  {CreateTaskDto, GetFilterTasks}  from './dto'
import { TaskStatus} from './taskStatus.enum';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';


@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(
        private taskService: TasksService
        ){}
    @Get()
    getTasks(
        @Query(ValidationPipe) filterQuery: GetFilterTasks,
        @GetUser() user: User  
    ): Promise<Task[]> {
        return this.taskService.getTasks(filterQuery, user)
    }

    @Get(':id')
    getOneTask(@Param('id', ParseIntPipe) id:number): Promise<Task>{
        return this.taskService.getOneTask(id)
    }
    
    @Post()
    @UsePipes(ValidationPipe)
    createNewTask(
        @Body() createTaskDto: CreateTaskDto,
        @GetUser() user: User 
    ): Promise<Task>{
        return this.taskService.createTask(createTaskDto, user);
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
