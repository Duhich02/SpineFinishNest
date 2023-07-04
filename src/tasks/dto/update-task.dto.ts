import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDto } from "./create-task.dto";
import { Comment } from "src/comments/entities/comment.entity";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  title?: string;
  comments?: Comment[];
}
