import { TasksStatus } from "../tasks.entity"
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class createClassDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    description: string
}

export class updateTaskDTO {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TasksStatus.DONE, TasksStatus.IN_PROGRESS, TasksStatus.PENDING])
    status?: TasksStatus
}
