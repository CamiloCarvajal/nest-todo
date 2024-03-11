import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createClassDTO, updateTaskDTO} from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }


    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTasks(@Body() newTask: createClassDTO) {
        return this.tasksService.createTasks(newTask.title, newTask.description)

    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTasks(id)
    }

    @Patch(':id')
    updateTasks(@Param('id') id:string, @Body() updatedFields: updateTaskDTO){
       return this.tasksService.updateTasks(id, updatedFields)
    }
}
