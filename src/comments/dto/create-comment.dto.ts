import { Task } from "src/tasks/entities/task.entity";

export class CreateCommentDto {
  description: string;
  task: Task;
}
