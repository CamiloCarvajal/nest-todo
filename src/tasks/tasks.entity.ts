export enum TasksStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export class Tasks {

    id: string
    title: string
    description: string
    status: TasksStatus

}

