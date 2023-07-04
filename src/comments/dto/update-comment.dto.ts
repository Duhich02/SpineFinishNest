import { PartialType } from "@nestjs/mapped-types";
import { CreateCommentDto } from "./create-comment.dto";
import { Task } from "src/tasks/entities/task.entity";

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  description?: string;
}
