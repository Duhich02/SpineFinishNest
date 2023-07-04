import { Task } from "src/tasks/entities/task.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {
  @ApiProperty({
    description: "Текст комментария",
  })
  description: string;

  @ApiProperty({
    description: "Связанная задача",
    minimum: 1,
  })
  task: Task;
}
