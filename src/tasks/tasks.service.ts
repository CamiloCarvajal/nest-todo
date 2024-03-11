import { Injectable } from '@nestjs/common';
import { Tasks, TasksStatus } from './tasks.entity';
import { updateTaskDTO } from './dto/task.dto';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {

    private tasks: Tasks[] = [
        {
            id: '1',
            title: 'Hacer el desayuno',
            description: 'Elegir los ingredientes para el desayuno y prepararlo',
            status: TasksStatus.DONE
        }
    ]

    getAllTasks() {
        return this.tasks
    }

    createTasks(title: string, description: string) {
        const task = {
            id: v4(),
            title,
            description,
            status: TasksStatus.PENDING
        }
        this.tasks.push(task)

        return task
    }

    updateTasks(id: string, updatedFields: updateTaskDTO) {
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updatedFields)
        this.tasks.map(task=> task.id == id ? newTask : task)

        return newTask
    }


    getTaskById(id: string): Tasks {
        return this.tasks.find((task) => task.id == id)
    }

    deleteTasks(id: string) {
        this.tasks = this.tasks.filter(task => task.id != id)
    }

}
